const { run } = require("hardhat")

const verify = async (constractAddress, args) => {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: constractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Alreadt verified")
        } else {
            console.log(e)
        }
    }
}

module.exports = { verify }
