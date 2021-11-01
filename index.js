function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400) {
    return 'This one is on me!'
  } else if (distance > 2500) {
    return 'No can do.'
  } else if (distance > 2000) {
    return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city === 'NYC') {
    return 'Ok, sounds good.';
  } else if (city === 'Pittsburgh') {
    return 'No go.'
  }
}

function switchOnCharmFromTip(tipAmt){
  // Write your code here!
  if (tipAmt === 'generous') {
    return 'Thank you so much.';
  } else if (tipAmt === 'not as generous') {
    return 'Thank you.'
  } else if (tipAmt === 'thanks for everything') {
    return 'Bye.'
  }
}