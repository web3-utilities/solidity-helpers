const { network } = require("hardhat");

module.exports = async ({
    deployments,
    getNamedAccounts,
}) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    console.log(`${deployer} in ${network.name}`)

    await deploy("Helper", {
        contract: "Helper",
        from: deployer,
        log: true,
    })
}

module.exports.tags = ['Helper']