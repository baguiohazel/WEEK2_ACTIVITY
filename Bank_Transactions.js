const accounts = [
  { name: "Alice", balance: 0, dailyWithdrawn: 0, hasDeposited: false, lastWithdrawalDate: null },
  { name: "Bob", balance: 0, dailyWithdrawn: 0, hasDeposited: false, lastWithdrawalDate: null },
  { name: "Charlie", balance: 0, dailyWithdrawn: 0, hasDeposited: false, lastWithdrawalDate: null }
];

const DAILY_LIMIT = 10000;

function resetDailyWithdrawnIfNewDay(account) {
  const today = new Date().toDateString(); 
  if (account.lastWithdrawalDate !== today) {
    account.dailyWithdrawn = 0;
    account.lastWithdrawalDate = today;
  }
}

function deposit(name, amount) {
  const account = accounts.find(acc => acc.name === name);
  if (!account) {
    console.log(`Account not found for ${name}`);
    return;
  }
  if (amount <= 0) {
    console.log("Deposit amount must be positive.");
    return;
  }
  account.balance += amount;
  account.hasDeposited = true;
  console.log(`${name} deposited ₱${amount}. New balance: ₱${account.balance}`);
}

function withdraw(name, amount) {
  const account = accounts.find(acc => acc.name === name);
  if (!account) {
    console.log(`Account not found for ${name}`);
    return;
  }
  
  // Reset dailyWithdrawn if it's a new day
  resetDailyWithdrawnIfNewDay(account);
  
  if (!account.hasDeposited) {
    console.log(`${name} must deposit first before withdrawing.`);
    return;
  }
  if (amount <= 0) {
    console.log("Withdrawal amount must be positive.");
    return;
  }
  if (amount > account.balance) {
    console.log(`${name} has insufficient balance.`);
    return;
  }
  if ((account.dailyWithdrawn + amount) > DAILY_LIMIT) {
    console.log(`${name} exceeds the daily withdrawal limit of ₱${DAILY_LIMIT}.`);
    return;
  }

  account.balance -= amount;
  account.dailyWithdrawn += amount;
  console.log(`${name} withdrew ₱${amount}. Remaining balance: ₱${account.balance}`);
}


deposit("Alice", 15000);     
withdraw("Alice", 5000);    
withdraw("Alice", 6000); 

withdraw("Bob", 1000);    
deposit("Bob", 8000);        
withdraw("Bob", 9000);       
withdraw("Bob", 7000);     
