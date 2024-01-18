const BankMangement = (callback) => {
  getSleep((sleep) => {
    getMoney(sleep, (money) => {
      depositInBank(money, (deposit) => {
        callback(deposit);
      });
    });
  });
};

function getSleep(next) {
  setTimeout(() => {
    const sleep = "📜";
    console.log("Getting a Sleep", sleep);
    next(sleep);
  }, 2000);
}

function getMoney(sleep, next) {
  setTimeout(() => {
    const money = "💸" + sleep;
    console.log("Getting a money", money);
    next(money);
  }, 2000);
}

function depositInBank(money, next) {
  setTimeout(() => {
    const deposit = "💸" + money;
    console.log("Deposit a money", deposit);
    next(deposit);
  }, 2000);
}

BankMangement();
