var miner="0xa00af22d07c87d96eeeb0ed583f8f6ac7812827e";
var deployer="0xa11aae29840fbb5c86e6fd4cf809eba183aef433";
var migrationManager="0xa22ab8a9d641ce77e06d98b7d7065d324d3d6976";
var emergencyManager="0xa33a6c312d9ad0e0f2e95541beed0cc081621fd0";
var user1="0xa44a08d3f6933c69212114bb66e2df1813651844";
var user2="0xa55a151eb00fded1634d27d1127b4be4627079ea";
var user3="0xa66a85ede0cbe03694aa9d9de0bb19c99ff55bd9";
deployer=0xa11aae29840fbb5c86e6fd4cf809eba183aef433
defaultGasPrice=163000000000
var tokenAddress="0xae62c7f15d5b7181f1eb7f436e80f61e877b364f";
var tokenAbi=[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenOwner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
var token=eth.contract(tokenAbi).at(tokenAddress);
var stakingAddress="0x171367f4d427567dab0dc38133c5dc3aad7001a7";
var stakingAbi=[{"inputs":[{"internalType":"uint256","name":"_cooldownPeriodInSec","type":"uint256"},{"internalType":"address","name":"_migrationManager","type":"address"},{"internalType":"address","name":"_emergencyManager","type":"address"},{"internalType":"contract IERC20","name":"_token","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"stakeOwner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalStakedAmount","type":"uint256"}],"name":"AcceptedMigration","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"emergencyManager","type":"address"}],"name":"EmergencyManagerUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"stakeOwner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalStakedAmount","type":"uint256"}],"name":"MigratedStake","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IMigratableStakingContract","name":"stakingContract","type":"address"}],"name":"MigrationDestinationAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IMigratableStakingContract","name":"stakingContract","type":"address"}],"name":"MigrationDestinationRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"migrationManager","type":"address"}],"name":"MigrationManagerUpdated","type":"event"},{"anonymous":false,"inputs":[],"name":"ReleasedAllStakes","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"stakeOwner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalStakedAmount","type":"uint256"}],"name":"Restaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IStakeChangeNotifier","name":"notifier","type":"address"}],"name":"StakeChangeNotifierUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"stakeOwner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalStakedAmount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[],"name":"StoppedAcceptingNewStake","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"stakeOwner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalStakedAmount","type":"uint256"}],"name":"Unstaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"stakeOwner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalStakedAmount","type":"uint256"}],"name":"Withdrew","type":"event"},{"constant":true,"inputs":[],"name":"MAX_APPROVED_STAKING_CONTRACTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"VERSION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_stakeOwner","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"acceptMigration","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"acceptingNewStakes","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IMigratableStakingContract","name":"_newStakingContract","type":"address"}],"name":"addMigrationDestination","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"approvedStakingContracts","outputs":[{"internalType":"contract IMigratableStakingContract","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cooldownPeriodInSec","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_totalAmount","type":"uint256"},{"internalType":"address[]","name":"_stakeOwners","type":"address[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"distributeRewards","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"emergencyManager","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_stakeOwner","type":"address"}],"name":"getStakeBalanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTotalStakedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_stakeOwner","type":"address"}],"name":"getUnstakeStatus","outputs":[{"internalType":"uint256","name":"cooldownAmount","type":"uint256"},{"internalType":"uint256","name":"cooldownEndTime","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"contract IMigratableStakingContract","name":"_stakingContract","type":"address"}],"name":"isApprovedStakingContract","outputs":[{"internalType":"bool","name":"exists","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IMigratableStakingContract","name":"_newStakingContract","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"migrateStakedTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"migrationManager","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"notifier","outputs":[{"internalType":"contract IStakeChangeNotifier","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"releaseAllStakes","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"releasingAllStakes","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IMigratableStakingContract","name":"_stakingContract","type":"address"}],"name":"removeMigrationDestination","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"restake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_newEmergencyManager","type":"address"}],"name":"setEmergencyManager","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_newMigrationManager","type":"address"}],"name":"setMigrationManager","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IStakeChangeNotifier","name":"_newNotifier","type":"address"}],"name":"setStakeChangeNotifier","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"stopAcceptingNewStakes","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"unstake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address[]","name":"_stakeOwners","type":"address[]"}],"name":"withdrawReleasedStakes","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
var staking=eth.contract(stakingAbi).at(stakingAddress);
var staking2Address="0x5c2c5ed58c3a9ff568473c02ca6ec0d17cdea87b";
var stakingAbi=[{"inputs":[{"internalType":"uint256","name":"_cooldownPeriodInSec","type":"uint256"},{"internalType":"address","name":"_migrationManager","type":"address"},{"internalType":"address","name":"_emergencyManager","type":"address"},{"internalType":"contract IERC20","name":"_token","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"stakeOwner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalStakedAmount","type":"uint256"}],"name":"AcceptedMigration","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"emergencyManager","type":"address"}],"name":"EmergencyManagerUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"stakeOwner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalStakedAmount","type":"uint256"}],"name":"MigratedStake","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IMigratableStakingContract","name":"stakingContract","type":"address"}],"name":"MigrationDestinationAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IMigratableStakingContract","name":"stakingContract","type":"address"}],"name":"MigrationDestinationRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"migrationManager","type":"address"}],"name":"MigrationManagerUpdated","type":"event"},{"anonymous":false,"inputs":[],"name":"ReleasedAllStakes","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"stakeOwner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalStakedAmount","type":"uint256"}],"name":"Restaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IStakeChangeNotifier","name":"notifier","type":"address"}],"name":"StakeChangeNotifierUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"stakeOwner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalStakedAmount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[],"name":"StoppedAcceptingNewStake","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"stakeOwner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalStakedAmount","type":"uint256"}],"name":"Unstaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"stakeOwner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalStakedAmount","type":"uint256"}],"name":"Withdrew","type":"event"},{"constant":true,"inputs":[],"name":"MAX_APPROVED_STAKING_CONTRACTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"VERSION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_stakeOwner","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"acceptMigration","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"acceptingNewStakes","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IMigratableStakingContract","name":"_newStakingContract","type":"address"}],"name":"addMigrationDestination","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"approvedStakingContracts","outputs":[{"internalType":"contract IMigratableStakingContract","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cooldownPeriodInSec","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_totalAmount","type":"uint256"},{"internalType":"address[]","name":"_stakeOwners","type":"address[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"distributeRewards","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"emergencyManager","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_stakeOwner","type":"address"}],"name":"getStakeBalanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTotalStakedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_stakeOwner","type":"address"}],"name":"getUnstakeStatus","outputs":[{"internalType":"uint256","name":"cooldownAmount","type":"uint256"},{"internalType":"uint256","name":"cooldownEndTime","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"contract IMigratableStakingContract","name":"_stakingContract","type":"address"}],"name":"isApprovedStakingContract","outputs":[{"internalType":"bool","name":"exists","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IMigratableStakingContract","name":"_newStakingContract","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"migrateStakedTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"migrationManager","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"notifier","outputs":[{"internalType":"contract IStakeChangeNotifier","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"releaseAllStakes","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"releasingAllStakes","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IMigratableStakingContract","name":"_stakingContract","type":"address"}],"name":"removeMigrationDestination","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"restake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_newEmergencyManager","type":"address"}],"name":"setEmergencyManager","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_newMigrationManager","type":"address"}],"name":"setMigrationManager","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IStakeChangeNotifier","name":"_newNotifier","type":"address"}],"name":"setStakeChangeNotifier","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"stopAcceptingNewStakes","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"unstake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address[]","name":"_stakeOwners","type":"address[]"}],"name":"withdrawReleasedStakes","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
var staking2=eth.contract(stakingAbi).at(staking2Address);
