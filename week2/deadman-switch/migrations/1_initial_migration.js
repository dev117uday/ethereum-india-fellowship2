const Migrations = artifacts.require("DeadManSwitch");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
