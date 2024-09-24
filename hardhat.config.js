require("@nomicfoundation/hardhat-toolbox");

task("deploy", "Deploys a contract")
  .addPositionalParam("contract", "The contract to deploy")
  .addOptionalPositionalParam("arg", "An optional argument")
  .setAction(async (taskArgs, hre) => {
    const contractName = taskArgs.contract;
    console.log(`Deploying ${contractName}...`);

    const Game = await hre.ethers.getContractFactory(contractName);
    const game = await Game.deploy();

    await game.deployed();

    console.log(`${contractName} deployed to address: ${game.address}`);

    if (taskArgs.arg) {
      console.log(`Additional argument provided: ${taskArgs.arg}`);
    }
  });


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: 'localhost'
};
