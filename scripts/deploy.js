// replace the name of the contract with which one you want to deploy!
const contractName = "Game2";  // <-- use the contract name here

async function main() {
  console.log("Please use the Hardhat 'deploy' task to deploy contracts.");
  // const Game = await hre.ethers.getContractFactory(contractName);  // <-- hardhat compiles and grabs the contract abi/bytecode using the name

  // // if you need to add constructor arguments for the particular game, add them here:
  // const game = await Game.deploy(); // <-- the transaction to deploy your contract to the blockchain
  // console.log(`${contractName} deployed to address: ${game.address}`);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });