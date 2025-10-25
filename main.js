const CONTRACT_ADDRESS = "0x856fAC9F7ff3f0E9D5fe8F5DB0102A8e8A4e381A"; 
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
		"name": "getPlatformFeeInWei",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
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
		"name": "MAX_PER_WALLET",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "mintedPerAddress",
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

        const receipt = await tx.wait();
        messageEl.innerText = "Mint successful!";
        userMintedAmount += amount;
        grecaptcha.reset();

        // Fetch newly minted token IDs
        const totalMintedNow = Number(await contract.totalMinted());
        const startId = totalMintedNow - amount + 1;

        for (let i = 0; i < amount; i++) {
            const tokenId = startId + i;
            let tokenURI = "";
            try { tokenURI = await contract.tokenURI(tokenId); } catch(e) { continue; }

            // Only display if user owns the token
            const owner = (await contract.ownerOf(tokenId)).toLowerCase();
            if (owner === userAddress) {
                await displayNFTForUser(tokenId, tokenURI);
                await addNFTtoMetaMask(tokenId, tokenURI);
            }
        }

        await refreshAll();
    } catch(err) {
        console.error(err);
        messageEl.innerText = "Mint failed: " + (err.reason || err.message);
    }
}
// ---------------------------
// Add NFT to MetaMask
// ---------------------------
async function addNFTtoMetaMask(tokenId, tokenURI) {
    if (!window.ethereum || !tokenId || !tokenURI) return;
    try {
        let imageURI = tokenURI;

        if (tokenURI.endsWith(".json") || tokenURI.includes(".json")) {
            try {
                const response = await fetch(tokenURI);
                const metadata = await response.json();
                if (metadata.image) {
                    imageURI = metadata.image;
                    if (imageURI.startsWith("ipfs://")) {
                        imageURI = imageURI.replace("ipfs://", "https://ipfs.io/ipfs/");
                    }
                }
            } catch (err) {
                console.warn("Failed to fetch metadata for MetaMask", tokenId, err);
            }
        } else if (tokenURI.startsWith("ipfs://")) {
            imageURI = tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/");
        }

        await window.ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC721',
                options: {
                    address: CONTRACT_ADDRESS,
                    symbol: 'ELG',
                    decimals: 0,
                    image: imageURI,
                    tokenId: tokenId.toString()
                }
            }
        });

        console.log(`NFT ${tokenId} added to MetaMask with image ${imageURI}`);
    } catch (err) {
        console.warn("Failed to add NFT to MetaMask:", err);
    }
}

// ---------------------------
// Display NFT only for connected user
// ---------------------------
async function displayNFTForUser(tokenId, tokenURI) {
    const nftGrid = document.getElementById("userNftGrid");
    if (!nftGrid || !tokenId || !tokenURI) return;

    let imageURI = tokenURI;

    // Fetch metadata if JSON
    if (tokenURI.endsWith(".json") || tokenURI.includes(".json")) {
        try {
            const response = await fetch(tokenURI);
            const metadata = await response.json();
            if (metadata.image) {
                imageURI = metadata.image;
                if (imageURI.startsWith("ipfs://")) {
                    imageURI = imageURI.replace("ipfs://", "https://ipfs.io/ipfs/");
                }
            }
        } catch (err) {
            console.warn("Failed to fetch metadata for NFT", tokenId, err);
        }
    } else if (tokenURI.startsWith("ipfs://")) {
        imageURI = tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/");
    }

    const div = document.createElement("div");
    div.classList.add("nft-card");
    div.innerHTML = `<img src="${imageURI}" alt="NFT ${tokenId}" style="width:200px; height:auto;"><p>ID: ${tokenId}</p>`;
    nftGrid.appendChild(div);
}

// ---------------------------
// Display only user's minted NFTs
// ---------------------------
async function displayMintedNFTs() {
    const nftGrid = document.getElementById("userNftGrid");
    if (!nftGrid || !contract || !userAddress) return;
    nftGrid.innerHTML = ""; // Clear previous

    try {
        const totalMintedBN = await contract.totalMinted();
        const totalMinted = Number(totalMintedBN || 0);

        if (totalMinted === 0) return;

        // Only fetch tokens owned by connected user
        const userTokenIds = [];
        for (let tokenId = 1; tokenId <= totalMinted; tokenId++) {
            try {
                const owner = (await contract.ownerOf(tokenId)).toLowerCase();
                if (owner === userAddress) userTokenIds.push(tokenId);
            } catch (e) {
                continue; // Skip invalid tokens
            }
        }

        // Fetch and display metadata for each NFT
        for (const tokenId of userTokenIds) {
            let tokenURI = "";
            try {
                tokenURI = await contract.tokenURI(tokenId);
            } catch (e) { continue; }

            await displayNFTForUser(tokenId, tokenURI);
        }
    } catch (err) {
        console.error("displayMintedNFTs error:", err);
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
window.onload = ()=>{ initWeb3Modal(); updatePrice(); }


