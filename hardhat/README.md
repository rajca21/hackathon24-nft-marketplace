# npm packages

npm install --save-dev hardhat
npm install @openzeppelin/contracts

# initializing new hardhat project

npx hardhat init

# Getting dummy accounts for trading

npx hardhat node
-- must stay on in terminal for working with these

# Deploying Smart Contract

npx hardhat run scripts/deploy.js
npx hardhat run scripts/deploy.js --network localhost
-- returns the contract address
