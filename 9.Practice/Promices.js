function BankMangement() {
  getSleep()
    .then((sleep) => {
      return getMoney(sleep);
    })
    .then((money) => {
      return depositInBank(money);
    });
}

function getSleep() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const sleep = "📜";
      console.log("Getting a Sleep", sleep);
      res(sleep);
    }, 2000);
  });
}

function getMoney(sleep) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const money = "💸" + sleep;
      console.log("Getting a money", money);
      res(money);
    }, 2000);
  });
}

function depositInBank(money) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const deposit = "💸" + money;
      console.log("Deposit a money", deposit);
      res(deposit);
    }, 2000);
  });
}

BankMangement();
