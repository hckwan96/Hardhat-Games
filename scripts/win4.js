// add the game address here and update the contract name if necessary
const gameAddr = "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318";
const contractName = "Game4";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    // uint8 has no signed, so can't pass -200 to the win function
    // so instead of signed integer, overflow the sum cos uint8 overflow will result 0
    // uint8 = 255 max, so overflow it with 266 which will give a result of 10 (266-256)
    const tx = await game.win(56);

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
