# Project Title
MyWallet Dapp

## Description

A simple wallet that allows user to receive ethers, withdraw ethers and also transfer ethers to another address
Here is the frontend for the smart contract written [here](https://github.com/Ultra-Tech-code/Functions_and_Errors)

This project is used to demonstrate frontend integration with a deployed smart Contract.


## Getting Started
- Proficiency in [Hardhat](https://hardhat.org/): It is essential to have a good grasp of using Hardhat, a development environment designed for writing, testing, and deploying smart contracts. 
- Understanding of [Solidity](https://soliditylang.org/): It is important to have a strong understanding of Solidity as it is the main programming language used for creating smart contracts in this codebase.
- Proficiency in [Next.js] (https://nextjs.org/): Good understanding of Next.js a react framework for building web application. It is used in building the frontend for the contract
- Understanding of [Tailwind](https://tailwindcss.com/):  is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML. Used in styling and structuring the page.
- Command line proficiency: Basic familiarity with using command line tools such as the terminal or Command Prompt is necessary for running commands and scripts.

### Installing
- Metamask Installation[https://metamask.io/download/]: A crypto wallet to interact with the blockchain app
- A text editor: For running the code [Visual Studio Code](https://code.visualstudio.com/).
- You will need to have [Node.js](https://nodejs.org/en) installed on your system, with version V10. or higher.
- Node Package Manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) used for installing and managing dependencies.
* run this command in your terminal `git clone https://github.com/Ultra-Tech-code/Simple-Wallet` to clone this repository

### Executing program

After cloning the github, you will want to do the following to get the code running on your computer.
 1. cd to the project directory, in the terminal type: `npm i`
 2. In the terminal type: `npx hardhat node``
 3. Open a second terminal
 4. In the second terminal, type: `npx hardhat run --network localhost scripts/deploy.js`
 5. Back in the first terminal, type `npm run dev` to launch the front-end.
 6. 
After this, the project will be running on your localhost. 
Typically at `http://localhost:3000/`

## Help
[hardhat tutorial](https://hardhat.org/tutorial)
[ethers docs](https://docs.ethers.org/)
[Tailwind docs](https://tailwindcss.com/docs/guides/nextjs)
[Modal pop up](https://sweetalert2.github.io/)

## Authors
  [@0xblackadam](https://twitter.com/i_hizick)

## License

This project is licensed under the [0xblackadam] License.