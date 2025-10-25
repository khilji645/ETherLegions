let ethPriceUSD = 3900; 
let FALLBACK_TOTAL_SUPPLY = 2221;
const MAX_MINT_PER_USER = 20; // Max per user
const FIXED_PLATFORM_FEE_ETH = 0.0007699; // $3 at $3900/ETH

// Elements
const connectWalletBtn = document.getElementById("connectWallet");
const mintBtn = document.getElementById("mintBtn");
const mintAmountInput = document.getElementById("mintAmount");
const totalPriceEl = document.getElementById("totalPrice");
const usdPriceEl = document.getElementById("usdPrice");
const mintedEl = document.getElementById("minted");
const remainingEl = document.getElementById("remaining");
const feesCollectedEl = document.getElementById("feesCollected");
const messageEl = document.getElementById("message");
const adminPanel = document.getElementById("adminPanel");
const nftGrid = document.getElementById("nftGrid");

const pauseBtn = document.getElementById("pauseBtn");
const resumeBtn = document.getElementById("resumeBtn");
const startWhitelistBtn = document.getElementById("startWhitelistBtn");
const stopWhitelistBtn = document.getElementById("stopWhitelistBtn");
const startPublicBtn = document.getElementById("startPublicBtn");
const stopPublicBtn = document.getElementById("stopPublicBtn");
const addWhitelistBtn = document.getElementById("addWhitelistBtn");
const removeWhitelistBtn = document.getElementById("removeWhitelistBtn");
const addAllWhitelistBtn = document.getElementById("addAllWhitelistBtn"); // new button
const withdrawBtn = document.getElementById("withdrawBtn");
const whitelistAddressInput = document.getElementById("whitelistAddress");

// Track user's minted amount
let userMintedAmount = 0;

// ---------------------------
// Web3Modal init
// ---------------------------
let web3Modal;
function initWeb3Modal() {
    const providerOptions = {
        injected: { package: null },
        walletconnect: {
            package: window.WalletConnectProvider?.default || window.WalletConnectProvider,
            options: {
                rpc: {
                    84531: NETWORKS[84531].rpc,
                    8453: NETWORKS[8453].rpc
                },
                qrcode: true,
                bridge: "https://bridge.walletconnect.org"
            }
        },
        coinbasewallet: {
            package: window.CoinbaseWalletSDK,
            options: {
                appName: "ETHERLEGIONS",
                rpc: NETWORKS[TARGET_CHAIN_ID].rpc,
                chainId: TARGET_CHAIN_ID,
                darkMode: true
            }
        }
    };
    web3Modal = new Web3Modal.default({
        cacheProvider: false,
        providerOptions,
        disableInjectedProvider: false,
        theme: "dark"
    });
}

let provider, signer, userAddress, contract;

// ---------------------------
// Connect Wallet
// ---------------------------
async function connectWallet() {
    try {
        if (!web3Modal) initWeb3Modal();
        const instance = await web3Modal.connect();
        provider = new ethers.BrowserProvider(instance);
        signer = await provider.getSigner();
        userAddress = (await signer.getAddress()).toLowerCase();
        contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

        window.contract = contract;
        window.provider = provider;
        window.signer = signer;

        const network = await provider.getNetwork();
        if (network.chainId !== TARGET_CHAIN_ID) {
            try {
                await instance.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: `0x${TARGET_CHAIN_ID.toString(16)}` }]
                });
            } catch (switchError) {
                console.warn(`Switch network to ${NETWORKS[TARGET_CHAIN_ID].name} manually.`, switchError);
            }
        }

        if (connectWalletBtn)
            connectWalletBtn.innerText = `Connected: ${userAddress.slice(0,6)}...${userAddress.slice(-4)}`;

        const whitelistSection = document.getElementById("whitelistPanel");
        const withdrawSection = document.getElementById("withdrawPanel");

        if (userAddress === PLATFORM_WALLET) {
            if (adminPanel) adminPanel.style.display = "block";
            if (whitelistSection) whitelistSection.style.display = "block";
            if (withdrawSection) withdrawSection.style.display = "block";
        } else {
            if (adminPanel) adminPanel.style.display = "none";
            if (whitelistSection) whitelistSection.style.display = "none";
            if (withdrawSection) withdrawSection.style.display = "none";
        }

        instance.on("accountsChanged", () => { connectWallet(); });
        instance.on("chainChanged", (chainIdHex) => {
            const chainIdDec = parseInt(chainIdHex, 16);
            if (chainIdDec !== TARGET_CHAIN_ID) {
                alert(`Please switch to ${NETWORKS[TARGET_CHAIN_ID].name}`);
            }
        });

        await refreshAll();

    } catch (err) {
        console.error("Wallet connection failed:", err);
        if (messageEl)
            messageEl.innerText = "Failed to connect wallet: " + (err.message || err);
    }
}

// ---------------------------
// Refresh Data
// ---------------------------
async function refreshAll() {
    await Promise.all([
        updateStats(),
        updatePrice(),
        displayMintedNFTs(),
        showWhitelist(),
        showSaleStatus()
    ]);
}

// ---------------------------
// Update stats
// ---------------------------
async function updateStats() {
    if (!contract) return;

    try {
        let totalSupply = FALLBACK_TOTAL_SUPPLY;
        if (typeof contract.totalSupply === "function") {
            totalSupply = Number(await contract.totalSupply());
        }

        let minted = 0;
        if (typeof contract.totalMinted === "function") {
            minted = Number(await contract.totalMinted());
        }

        const remaining = totalSupply - minted;

        let feesCollected = 0;
        if (provider) {
            const balance = await provider.getBalance(CONTRACT_ADDRESS);
            feesCollected = Number(ethers.formatEther(balance));
        }

        if (document.getElementById("totalSupply")) document.getElementById("totalSupply").innerText = totalSupply;
        if (document.getElementById("minted")) document.getElementById("minted").innerText = minted;
        if (document.getElementById("remaining")) document.getElementById("remaining").innerText = remaining;
        if (document.getElementById("feesCollected")) document.getElementById("feesCollected").innerText = feesCollected.toFixed(6);
    } catch(err) {
        console.error("updateStats error:", err);
    }
}

// ---------------------------
// Update Price (Fixed Fee)
// ---------------------------
async function updatePrice() {
    if (!mintAmountInput) return;
    const amount = parseInt(mintAmountInput.value) || 0;
    if (amount <= 0) {
        if (totalPriceEl) totalPriceEl.innerText = "0.000000";
        if (usdPriceEl) usdPriceEl.innerText = "0.00";
        return;
    }

    const platformCost = amount * FIXED_PLATFORM_FEE_ETH;
    const estimatedGasFeeETH = 0.0004 * amount;
    const totalETH = platformCost + estimatedGasFeeETH;
    const totalUSD = totalETH * ethPriceUSD;

    totalPriceEl.innerHTML = `
        Platform Fee: ${platformCost.toFixed(6)} ETH<br>
        Est. Gas Fee: ${estimatedGasFeeETH.toFixed(6)} ETH<br>
        <strong>Total: ${totalETH.toFixed(6)} ETH</strong>
    `;
    usdPriceEl.innerHTML = `≈ $${totalUSD.toFixed(2)} USD`;
}

// ---------------------------
// Mint NFTs
// ---------------------------
async function mintNFTs() {
    if (messageEl) messageEl.innerText = "";
    const amount = parseInt(mintAmountInput.value);
    if (!amount || amount <= 0) {
        messageEl.innerText = "Enter a valid number of NFTs";
        return;
    }

    if ((userMintedAmount + amount) > MAX_MINT_PER_USER) {
        messageEl.innerText = `You can only mint up to ${MAX_MINT_PER_USER} NFTs. You have already minted ${userMintedAmount}.`;
        return;
    }

    const captchaResponse = grecaptcha.getResponse();
    if (!captchaResponse) {
        messageEl.innerText = "Please complete the CAPTCHA to proceed.";
        return;
    }

    try {
        const totalFeeETH = FIXED_PLATFORM_FEE_ETH * amount;
        const value = ethers.parseEther(totalFeeETH.toString());
        const tx = await contract.mint(amount, { value });
        messageEl.innerText = "Transaction sent... waiting for confirmation";
        await tx.wait();
        messageEl.innerText = "Mint successful!";

        userMintedAmount += amount;
        grecaptcha.reset();

        await refreshAll();
    } catch(err) {
        console.error(err);
        messageEl.innerText = "Mint failed: " + (err.reason || err.message);
    }
}

// ---------------------------
// Display NFTs
// ---------------------------
async function displayMintedNFTs() {
    if (!nftGrid) return;
    nftGrid.innerHTML = "";
    if (!contract) return;
    try {
        const totalMintedBN = await contract.totalMinted();
        const totalMinted = Number(totalMintedBN || 0);
        for (let i = 0; i < totalMinted; i++) {
            try {
                let uri;
                if (typeof contract.tokenURI === "function") {
                    try { uri = await contract.tokenURI(i+1); }
                    catch(e){ uri = await contract.tokenURIs(i).catch(()=>null); }
                } else {
                    uri = await contract.tokenURIs(i).catch(()=>null);
                }
                if (!uri) continue;
                const div = document.createElement("div");
                div.classList.add("nft-card");
                div.innerHTML = `<img src="${uri}" alt="NFT ${i+1}"><p>ID: ${i+1}</p>`;
                nftGrid.appendChild(div);
            } catch(e){ break; }
        }
    } catch(e){ console.error("displayMintedNFTs error:", e); }
}

// ---------------------------
// Admin functions
// ---------------------------
async function pauseMint(){ if(contract){ await contract.pause(); messageEl.innerText="Mint paused ✅"; await refreshAll(); } }
async function resumeMint(){ if(contract){ await contract.resume(); messageEl.innerText="Mint resumed ✅"; await refreshAll(); } }
async function startWhitelist(){ if(contract){ await contract.setWhitelistSale(true); await contract.setPublicSale(false); messageEl.innerText="Whitelist sale started ✅"; await refreshAll(); } }
async function stopWhitelist(){ if(contract){ await contract.setWhitelistSale(false); messageEl.innerText="Whitelist sale stopped 🛑"; await refreshAll(); } }
async function startPublic(){ if(contract){ await contract.setPublicSale(true); await contract.setWhitelistSale(false); messageEl.innerText="Public sale started ✅"; await refreshAll(); } }
async function stopPublic(){ if(contract){ await contract.setPublicSale(false); messageEl.innerText="Public sale stopped 🛑"; await refreshAll(); } }

// ---------------------------
// Updated Add Whitelist (Manual + Auto Chunked Upload)
async function addWhitelist(autoAddresses=null) {
    if(userAddress !== PLATFORM_WALLET) return;
    if(!contract) return;

    let addresses = [];

    if(autoAddresses && Array.isArray(autoAddresses) && autoAddresses.length>0){
        addresses = autoAddresses.map(a=>a.trim()).filter(a=>a);
    } else if(whitelistAddressInput && whitelistAddressInput.value){
        addresses = whitelistAddressInput.value.split(",").map(a=>a.trim()).filter(a=>a);
    }

    if(addresses.length===0){ 
        messageEl.innerText="No addresses provided"; 
        return; 
    }

    // Chunk size (50 per transaction)
    const chunkSize = 50;
    const chunks = [];
    for(let i=0;i<addresses.length;i+=chunkSize){
        chunks.push(addresses.slice(i,i+chunkSize));
    }

    // Auto/manual upload
    if(chunks.length===1){
        // Single chunk (manual)
        await contract.addWhitelist(chunks[0]);
        if(whitelistAddressInput) whitelistAddressInput.value="";
        messageEl.innerText="Added to whitelist ✅";
    } else {
        // Multiple chunks
        messageEl.innerText = `Uploading ${addresses.length} addresses in ${chunks.length} chunks...`;
        for(let i=0;i<chunks.length;i++){
            try{
                await contract.addWhitelist(chunks[i]);
                messageEl.innerText = `Chunk ${i+1}/${chunks.length} uploaded ✅`;
            }catch(err){
                console.error("Chunk upload failed:", err);
                messageEl.innerText = `Error uploading chunk ${i+1}: ${err.reason||err.message}`;
            }
        }
        if(whitelistAddressInput) whitelistAddressInput.value="";
        messageEl.innerText += " All chunks processed.";
    }

    await refreshAll();
}

// ---------------------------
async function removeWhitelist() {
    if(userAddress !== PLATFORM_WALLET) return;
    if(!whitelistAddressInput || !contract) return;
    const addresses = whitelistAddressInput.value.split(",").map(a=>a.trim()).filter(a=>a);
    if(addresses.length===0){ messageEl.innerText="No addresses provided"; return; }
    await contract.removeWhitelist(addresses);
    whitelistAddressInput.value="";
    messageEl.innerText="Removed from whitelist ✅";
    await refreshAll();
}

// ---------------------------
// Add All Whitelist button handler
if(addAllWhitelistBtn){
    addAllWhitelistBtn.addEventListener("click", async ()=>{
        if(!window.allWhitelistAddresses || !Array.isArray(window.allWhitelistAddresses)) {
            messageEl.innerText="No preloaded whitelist addresses found.";
            return;
        }
        await addWhitelist(window.allWhitelistAddresses);
    });
}

// ---------------------------
// Withdraw funds
async function withdrawFunds() {
    if(userAddress !== PLATFORM_WALLET) return;
    if(!contract) return;
    try {
        const balance = await provider.getBalance(CONTRACT_ADDRESS);
        if(Number(balance)<=0){ messageEl.innerText="No funds to withdraw ❌"; return; }
        const tx = await contract.withdrawFunds();
        messageEl.innerText="Withdrawal sent... awaiting confirmation ⏳";
        await tx.wait();
        messageEl.innerText="Platform fees withdrawn ✅";
        await refreshAll();
    } catch(err){
        console.error("withdrawFunds error:", err);
        messageEl.innerText="Withdrawal failed: "+(err.reason||err.message||err);
    }
}

// ---------------------------
// Show whitelist
async function showWhitelist() {
    if(!contract) return;
    const whitelistList = document.getElementById("whitelistList");
    if(!whitelistList) return;
    whitelistList.innerHTML="";
    let addresses=[];
    try{
        if(typeof contract.whitelistAddresses==="function"){
            let idx=0;
            while(true){
                try{
                    const addr = await contract.whitelistAddresses(idx);
                    if(!addr || addr==="0x0000000000000000000000000000000000000000") break;
                    addresses.push(addr);
                    idx++;
                }catch(e){ break; }
            }
        }
    }catch(e){ console.error("showWhitelist error:",e);}
    if(addresses.length===0){
        const li=document.createElement("li");
        li.innerText="No whitelisted addresses yet.";
        whitelistList.appendChild(li);
        return;
    }
    for(const a of addresses){
        const li=document.createElement("li");
        li.innerText=a;
        whitelistList.appendChild(li);
    }
}

// ---------------------------
// Check if address is whitelisted
async function checkWhitelist() {
    const input = document.getElementById("whitelistSearch");
    const result = document.getElementById("whitelistResult");
    if(!input || !result || !contract) return;
    const address = input.value.trim();
    if(!address){ result.innerText="Please enter a wallet address."; result.style.color="orange"; return; }
    try{
        const fn = contract.whitelisted || contract.whitelistedAddresses;
        const isWhitelisted = await fn.call(contract,address);
        if(isWhitelisted){ result.innerText="✅ Yes, this address is included in the whitelist."; result.style.color="green"; }
        else{ result.innerText="❌ No, this address is not whitelisted."; result.style.color="red"; }
    }catch(err){
        console.error("Whitelist check error:",err);
        result.innerText="⚠️ Error checking whitelist. Try again.";
        result.style.color="orange";
    }
}

// ---------------------------
// Sale status
async function showSaleStatus() {
    if(!contract) return;
    let status="Sale Status: ";
    const whitelistActive = await contract.whitelistSaleActive().catch(()=>false);
    const publicActive = await contract.publicSaleActive().catch(()=>false);
    const paused = await contract.paused().catch(()=>false);
    if(paused) status+="Paused ❌";
    else if(whitelistActive) status+="Whitelist Active 🟢";
    else if(publicActive) status+="Public Active 🟢";
    else status+="Inactive ⚪";
    let statusEl = document.getElementById("saleStatus");
    if(!statusEl && adminPanel){ statusEl=document.createElement("p"); statusEl.id="saleStatus"; adminPanel.appendChild(statusEl); }
    if(statusEl) statusEl.innerText=status;
}

// ---------------------------
// Event listeners
if(connectWalletBtn) connectWalletBtn.addEventListener("click", connectWallet);
if(mintBtn) mintBtn.addEventListener("click", mintNFTs);
if(mintAmountInput) mintAmountInput.addEventListener("input", updatePrice);
if(pauseBtn) pauseBtn.addEventListener("click", pauseMint);
if(resumeBtn) resumeBtn.addEventListener("click", resumeMint);
if(startWhitelistBtn) startWhitelistBtn.addEventListener("click", startWhitelist);
if(stopWhitelistBtn) stopWhitelistBtn.addEventListener("click", stopWhitelist);
if(startPublicBtn) startPublicBtn.addEventListener("click", startPublic);
if(stopPublicBtn) stopPublicBtn.addEventListener("click", stopPublic);
if(addWhitelistBtn) addWhitelistBtn.addEventListener("click", addWhitelist);
if(removeWhitelistBtn) removeWhitelistBtn.addEventListener("click", removeWhitelist);
if(withdrawBtn) withdrawBtn.addEventListener("click", withdrawFunds);
const whitelistSearchBtn = document.getElementById("whitelistSearchBtn");
if(whitelistSearchBtn) whitelistSearchBtn.addEventListener("click", checkWhitelist);

// ---------------------------
// Auto refresh
setInterval(()=>{ if(contract) refreshAll(); }, 20000);

// ---------------------------
// On load
window.onload = ()=>{ initWeb3Modal(); updatePrice(); }
