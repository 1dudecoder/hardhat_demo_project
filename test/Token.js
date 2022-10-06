const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", function () {

  it("testing balanceof function",async()=>{
    const [owner,add1,add2] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("Token");
    const HardHatToken = await Token.deploy();
    await HardHatToken.transfer(add1.address,10);
    expect(await HardHatToken.balanceof(add1.address)).to.equals(10);
  })

  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();  //sign contract with owner
    const Token = await ethers.getContractFactory("Token"); //creating refrence of contract
    const HardHatToken = await Token.deploy(); //deploying contract on hardhat
    const ownerBalance = await HardHatToken.balanceof(owner.address); //checking balance of contract with our created balanceof function
    expect(await HardHatToken.total_supply()).to.equal(ownerBalance); //checking manager balance is equal to total supplier
  })

  it("testing Transfer person", async () => {
    const [owner,add1,add2] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("Token");
    const HardHatToken = await Token.deploy();
    await HardHatToken.transfer(add1.address,50);
    expect (await HardHatToken.balanceof(add1.address)).to.equals(50);
    await HardHatToken.connect(add1).transfer(add2.address,20);
    expect(await HardHatToken.balanceof(add2.address)).to.equals(20);
  })

  


});