const Migrations = artifacts.require("WallStreetCoin");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
