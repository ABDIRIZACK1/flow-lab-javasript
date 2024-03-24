function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return 'This one is on me!';
  } else if (distance > 2000 && distance < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (distance > 2500) {
    return 'No can do.';
  } else if (distance > 300 && distance < 320) { // Adjusted condition for the specified range
    return 'This one is special!';
  } else {
    return 'Thank you.';
  }
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}