🪙 EtherLegions – NFT Minting DApp
Developer: Mehmood Iqbal
Role: Full-Stack DApp Developer
Live Demo: https://e-ther-legions.vercel.app/
________________________________________
🚀 Overview
EtherLegions is a futuristic full-stack NFT minting DApp that integrates MetaMask, Ethers.js, and Solidity smart contracts.
It allows users to securely connect their wallet, verify through captcha, and mint NFTs with built-in mint limit protection.
________________________________________
🔥 Features
•	MetaMask wallet connection (Ethers.js)
•	Captcha verification to prevent bots
•	Mint limit per wallet
•	Real-time transaction validation
•	Responsive UI built with HTML, CSS, JS
•	Secure backend logic (Flask)
•	Deployed live on Vercel
________________________________________
🧠 Tech Stack
Frontend: HTML, CSS, JavaScript
Blockchain: Solidity, Ethers.js
Backend: Flask (Python)
Hosting: Vercel
________________________________________
🧩 Smart Contract Example (Solidity)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EtherLegions {
    uint256 public mintCount;
    uint256 public maxMintsPerWallet = 3;
    mapping(address => uint256) public minted;

    function mint() public {
        require(minted[msg.sender] < maxMintsPerWallet, "Mint limit reached");
        minted[msg.sender]++;
        mintCount++;
    }
}
________________________________________
🧱 Project Structure
├── index.html       # Frontend UI  
├── main.js          # Ethers.js + Web3 logic  
├── style.css        # Styling  
└── (Flask backend)  # Optional Python server for validation
________________________________________
🌐 Live Preview
👉 Visit: https://e-ther-legions.vercel.app/
________________________________________
📜 License
This project is licensed under the MIT License — feel free to use and modify.
________________________________________
👨‍💻 Author
Mehmood Iqbal
Full-Stack DApp Developer
📧 khilji.khan0000@gmail.com

