const { ethers } = require("hardhat");

async function main() {

  const ROHToken = await ethers.getContractFactory("ROHToken");
  console.log("Deploying...");
  const rohToken = await ROHToken.deploy();
  await rohToken.deploy();
  console.log(`Tokane address: ${rohToken.address}`);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
