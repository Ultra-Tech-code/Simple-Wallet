// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const MyWallet = await hre.ethers.getContractFactory("MyWallet");
  const mywallet = await MyWallet.deploy();
  await mywallet.deployed();

  console.log(`My Wallet contract  deployed to ${mywallet.address}`);

  //Interact with the contract
const wallet = await hre.ethers.getContractAt("MyWallet", mywallet.address);

//Get the balance of the contract
let checkBalance = await wallet.checkBalance();
console.log(`checkBalance of the contract is ${checkBalance.toString()}`);

const amount = hre.ethers.utils.parseEther("2.0");
//deposit 2 ether to the contract
let deposit = await wallet.deposit(2,{value: hre.ethers.utils.parseEther("2.0")});
await deposit.wait();
console.log(`Deposit to the contract is done`);

//Get the balance of the contract
checkBalance = await wallet.checkBalance();
console.log(`checkBalance of the contract is ${checkBalance.toString()}`);


//sendEther to another address
let sendEther = await wallet.sendEther("0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65", 1);
await sendEther.wait();
console.log(`sendEther to another address is done`);

//amountSent to another address
let amountSent = await wallet.amountSent("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
console.log(`amountSent to another address is ${amountSent.toString()}`);

//withdraw from the contract
let withdraw = await wallet.withdraw(1);
await withdraw.wait();
console.log(`withdraw from the contract is done`);

//Get the balance of the contract
checkBalance = await wallet.checkBalance();
console.log(`checkBalance of the contract is ${checkBalance.toString()}`);




}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
