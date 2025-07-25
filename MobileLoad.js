const loadTracker = {}; 

const DAILY_LIMIT = 500;

function sendLoad(number, amount) {
  if (amount <= 0) {
    console.log(` Invalid load amount.`);
    return;
  }


  if (!loadTracker[number]) {
    loadTracker[number] = { total: 0 };
  }

  const currentTotal = loadTracker[number].total;

  if (currentTotal + amount > DAILY_LIMIT) {
    console.log(` Load denied for ${number}: Daily limit of ₱${DAILY_LIMIT} exceeded. Already received ₱${currentTotal}.`);
  } else {
    loadTracker[number].total += amount;
    console.log(` Load sent: ₱${amount} to ${number}. Total today: ₱${loadTracker[number].total}`);
  }
}


sendLoad("09123456789", 200); 
sendLoad("09123456789", 250); 
sendLoad("09123456789", 100); 
sendLoad("09998887777", 200); 
sendLoad("09998887777", 1);   
