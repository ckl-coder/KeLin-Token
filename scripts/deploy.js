async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("正在用以下地址部署合约:");
    console.log("部署者地址:", deployer.address);
  
    // 修复后的余额查询写法（ethers v6 正确姿势）
    const balance = await ethers.provider.getBalance(deployer.address);
    console.log("账户余额:", ethers.formatEther(balance), "ETH");
  
    console.log("正在部署 MyFirstToken...");
  
    const MyFirstToken = await ethers.getContractFactory("MyFirstToken");
    const token = await MyFirstToken.deploy();
  
    await token.waitForDeployment();  // 等待部署完成
    const tokenAddress = await token.getAddress();
  
    console.log("========================================");
    console.log("🎉 恭喜！你的 ERC20 代币已经成功部署到 Sepolia 测试网！");
    console.log("合约地址:", tokenAddress);
    console.log("========================================");
    console.log("快去 Sepolia Etherscan 查看：");
    console.log(`https://sepolia.etherscan.io/address/${tokenAddress}`);
    console.log("");
    console.log("MetaMask 里添加代币方法：");
    console.log("1. 打开 MetaMask → 添加代币 → 自定义代币");
    console.log(`2. 代币合约地址填：${tokenAddress}`);
    console.log("3. 小数位自动识别为 18,符号是 KL");
  }
  
  main().catch((error) => {
    console.error("部署失败:", error);
    process.exitCode = 1;
  });