const CONTRACT_ADDRESS = "0x4C8b929f0eb6519Ca4Cd9AeDB5Aa85589fBEf02C"; 
const ABI =[
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "users",
				"type": "address[]"
			}
		],
		"name": "addWhitelist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "numberOfNFTs",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_baseURI",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_maxSupply",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "_platformWallet",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_priceFeedAddress",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721IncorrectOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721InsufficientApproval",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "ERC721InvalidOperator",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721InvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC721InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721NonexistentToken",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address[]",
				"name": "users",
				"type": "address[]"
			}
		],
		"name": "AddedToWhitelist",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "FundsWithdrawn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "minter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "tokenIds",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalFee",
				"type": "uint256"
			}
		],
		"name": "Minted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "numberOfNFTs",
				"type": "uint256"
			}
		],
		"name": "ownerMint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "OwnerMinted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Paused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address[]",
				"name": "users",
				"type": "address[]"
			}
		],
		"name": "RemovedFromWhitelist",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "users",
				"type": "address[]"
			}
		],
		"name": "removeWhitelist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "resume",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "mode",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "active",
				"type": "bool"
			}
		],
		"name": "SaleStatusChanged",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newBaseURI",
				"type": "string"
			}
		],
		"name": "setBaseURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "active",
				"type": "bool"
			}
		],
		"name": "setPublicSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "active",
				"type": "bool"
			}
		],
		"name": "setWhitelistSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Unpaused",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [],
		"name": "withdrawFunds",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "baseURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllWhitelisted",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getLatestPrice",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPlatformFeeInWei",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "platformWallet",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "publicSaleActive",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "remainingSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalMinted",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalPlatformFeesCollected",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "whitelistAddresses",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "whitelisted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "whitelistSaleActive",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


let provider, signer, contract, userAddress, web3Modal; 
let ethPriceUSD = 3900;
let FALLBACK_TOTAL_SUPPLY = 2221;

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
const withdrawBtn = document.getElementById("withdrawBtn");
const whitelistAddressInput = document.getElementById("whitelistAddress");

// ---------------------------
// Web3Modal init
// ---------------------------
function initWeb3Modal() {
    const providerOptions = {
        injected: { package: null },
        coinbasewallet: {
            package: window.CoinbaseWalletSDK,
            options: { appName: "ETHERLEGIONS" }
        }
    };
    web3Modal = new Web3Modal.default({
        cacheProvider: false,
        providerOptions,
        disableInjectedProvider: false,
        theme: "dark"
    });
}

// ---------------------------
// Connect wallet
// ---------------------------
const PLATFORM_WALLET = "0xa082E12865D934f77de1a44a72413Bd4bBB51adB".toLowerCase(); // Admin wallet

async function connectWallet() {
    try {
        const instance = await web3Modal.connect();
        provider = new ethers.BrowserProvider(instance);
        signer = await provider.getSigner();
        userAddress = (await signer.getAddress()).toLowerCase();
        contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

        window.contract = contract;
        window.provider = provider;

        if (connectWalletBtn)
            connectWalletBtn.innerText = `Connected: ${userAddress.slice(0,6)}...${userAddress.slice(-4)}`;

        // Admin-only sections
        const whitelistSection = document.querySelector(".whitelist");
        const whitelistButtons = document.querySelector(".whitelist-buttons");
        const whitelistInputs = document.querySelector(".whitelist-inputs");
        const withdrawSection = document.querySelector(".withdraw");

        if (userAddress === PLATFORM_WALLET) {
            if (adminPanel) adminPanel.style.display = "block";
            if (whitelistSection) whitelistSection.style.display = "block";
            if (whitelistButtons) whitelistButtons.style.display = "flex";
            if (whitelistInputs) whitelistInputs.style.display = "flex";
            if (withdrawSection) withdrawSection.style.display = "block";
        } else {
            if (adminPanel) adminPanel.style.display = "none";
            if (whitelistButtons) whitelistButtons.style.display = "none";
            if (whitelistInputs) whitelistInputs.style.display = "none";
            if (withdrawSection) withdrawSection.style.display = "none";
        }

        await refreshAll();
    } catch (err) {
        console.error(err);
        if (messageEl)
            messageEl.innerText = "Failed to connect wallet: " + (err.message || err);
    }
}

// ---------------------------
// Helper: get total supply
// ---------------------------
async function getTotalSupplyFromContract() {
    if (!contract) return FALLBACK_TOTAL_SUPPLY;
    try { if (typeof contract.tokenURIsLength === "function") return Number(await contract.tokenURIsLength()); } catch(e){}
    try { if (typeof contract.MAX_SUPPLY === "function") return Number(await contract.MAX_SUPPLY()); } catch(e){}
    try {
        if (typeof contract.tokenURIs === "function") {
            let count = 0;
            for (let i=0; i<1000; i++) {
                try { const uri = await contract.tokenURIs(i); if(!uri) break; count++; } catch(e){ break; }
            }
            if (count>0) return count;
        }
    } catch(e){}
    return FALLBACK_TOTAL_SUPPLY;
}

// ---------------------------
// Global refresh
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
// Stats update
// ---------------------------
async function updateStats() {
    try {
        if (!contract) return;
        const totalMintedBN = await contract.totalMinted().catch(() => 0);
        const totalMinted = Number(totalMintedBN || 0);
        const totalSupply = await getTotalSupplyFromContract();

        mintedEl.innerText = totalMinted;
        remainingEl.innerText = Math.max(0, totalSupply - totalMinted);

        const totalSupplyEl = document.getElementById("totalSupply");
        if (totalSupplyEl) totalSupplyEl.innerText = totalSupply;

        let fees = 0;
        try {
            if (typeof contract.totalPlatformFeesCollected === "function") {
                const feesBN = await contract.totalPlatformFeesCollected();
                fees = Number(ethers.formatEther(feesBN || 0));
            }
            if (fees === 0) {
                const balance = await provider.getBalance(CONTRACT_ADDRESS);
                fees = Number(ethers.formatEther(balance || 0));
            }
        } catch(e){ fees = 0; }

        feesCollectedEl.innerText = fees.toFixed(6);
    } catch(err) {
        console.error("updateStats error:", err);
        if (feesCollectedEl) feesCollectedEl.innerText = "0.000000";
    }
}

// ---------------------------
// Update price
// ---------------------------
async function updatePrice() {
    if (!mintAmountInput) return;
    const amount = parseInt(mintAmountInput.value) || 0;
    if (!contract || amount <= 0) {
        if (totalPriceEl) totalPriceEl.innerText = "0.000000";
        if (usdPriceEl) usdPriceEl.innerText = "0.00";
        return;
    }
    try {
        const platformFeeETHBN = await contract.getPlatformFeeInWei();
        const feeETH = Number(ethers.formatEther(platformFeeETHBN));
        const platformCost = amount * feeETH;
        const estimatedGasFeeETH = 0.0004 * amount;
        const totalETH = platformCost + estimatedGasFeeETH;
        const totalUSD = totalETH * ethPriceUSD;

        totalPriceEl.innerHTML = `
            Platform Fee: ${platformCost.toFixed(6)} ETH<br>
            Est. Gas Fee: ${estimatedGasFeeETH.toFixed(6)} ETH<br>
            <strong>Total: ${totalETH.toFixed(6)} ETH</strong>
        `;
        usdPriceEl.innerHTML = `≈ $${totalUSD.toFixed(2)} USD`;
    } catch(err) { console.error("Failed to fetch platform fee: ", err); }
}

// ---------------------------
// Mint NFTs
// ---------------------------
async function mintNFTs() {
    if (messageEl) messageEl.innerText = "";
    if (!mintAmountInput) return;
    const amount = parseInt(mintAmountInput.value);
    if (!amount || amount <= 0) {
        messageEl.innerText = "Enter a valid number of NFTs";
        return;
    }
    try {
        const platformFeeETHBN = await contract.getPlatformFeeInWei();
        const feeETH = Number(ethers.formatEther(platformFeeETHBN));
        const value = ethers.parseEther((amount*feeETH).toString());
        const tx = await contract.mint(amount, { value });
        messageEl.innerText = "Transaction sent... waiting for confirmation";
        await tx.wait();
        messageEl.innerText = "Mint successful!";
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

async function addWhitelist() {
    if(userAddress !== PLATFORM_WALLET) return;
    if(!whitelistAddressInput || !contract) return;
    const addresses = whitelistAddressInput.value.split(",").map(a=>a.trim()).filter(a=>a);
    if(addresses.length===0){ messageEl.innerText="No addresses provided"; return; }
    await contract.addWhitelist(addresses);
    whitelistAddressInput.value="";
    messageEl.innerText="Added to whitelist ✅";
    await refreshAll();
}

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
// Withdraw platform fees
// ---------------------------
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
// ---------------------------
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
// ---------------------------
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
// ---------------------------
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
// ---------------------------
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
// ---------------------------
setInterval(()=>{ if(contract) refreshAll(); }, 20000);

// ---------------------------
// On load
// ---------------------------
window.onload = ()=>{ initWeb3Modal(); updatePrice(); };

