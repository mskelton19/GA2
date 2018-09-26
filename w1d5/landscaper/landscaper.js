let money = 0;
let days = 0;

// Ask how they're going to mow the lawns
const equipment = prompt("What will you use to mow the lawn?", "Teeth");

// If they say they're going to use their teeth
if(equipment === 'teeth' || equipment === 'Teeth'){
  // Add +1 days
  days += 1;
  // Add +$1 in money
  money += 1;
}
