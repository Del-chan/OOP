var bankAccount = function(custName, acctNumber, acctType){
  this.custName = custName;
  this.acctNumber = acctNumber;
  this.acctType = acctType;
  this.balance = 0;
};

bankAccount.prototype.deposit = function(amount){
  if(amount <= 0){
    return "Invalid deposit amount";
  }
  else{
    this.balance += amount;
    return this.balance;
  }
};
bankAccount.prototype.withdraw = function(){
  if(this.balance - amount < this.minimumBalance){
    return "Cannot withdraw beyond the current account balance";
  }
  else if(amount > this.balance){
    return "Cannot withdraw beyond the current balance";
  }
  else if(amount <= 0){
    return "Invalid withdraw amount";
  }
  else{
    this.balance -= amount;
    return this.balance;
  }
};
bankAccount.prototype.displayBalance = function(){
  console.log("Your account balance is " +this.balance );
};
bankAccount.prototype.accountDetails = function(){
  console.log("Account name: " +this.custName+ " Account number: " +acctNumber+ " Account balance: " +this.balance );
};
var savingsAccount = function (custName, acctNumber, minimumBalance){
  bankAccount.call(this, custName, acctNumber);
  this.minimumBalance = 1000;
  this.balance = this.minimumBalance;
}

savingsAccount.prototype = Object.create(bankAccount.prototype);
savingsAccount.prototype.constructor = savingsAccount;

var currentAccount = function(custName, acctNumber, minimumBalance){
  bankAccount.call(this, custName, acctNumber);
  this.minimumBalance = 5000;
  this.balance = this.minimumBalance;
}

currentAccount.prototype = Object.create(bankAccount.prototype);
currentAccount.prototype.constructor = currentAccount;
