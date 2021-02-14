const Migrations = artifacts.require("Owner");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
