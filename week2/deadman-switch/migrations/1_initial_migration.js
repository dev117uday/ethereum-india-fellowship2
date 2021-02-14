const Migrations = artifacts.require("DeadManSwitch");
require('dotenv').config()
let address = process.env.ADDRESS;

module.exports = function (deployer) {
  deployer.deploy(Migrations,address);
};
