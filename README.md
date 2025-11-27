# KeLin-Token（代币项目名称）

## 项目介绍
这是我的第一个区块链代币项目，基于 Solidity + Hardhat 开发。

## 功能特性
- 支持 ERC-20 标准接口
- 测试网部署（Sepolia/BSC Testnet）
- 自定义代币logo（已提交 Trust Wallet 审核）

## 部署步骤
1. 安装依赖：npm install
2. 编译合约：npx hardhat compile
3. 部署到测试网：npx hardhat run scripts/deploy.js --network sepolia