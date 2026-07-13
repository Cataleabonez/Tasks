function dayMessage(day) {
  switch (day) {
    case 'Monday':
      return 'I hate Mondays';
    case 'Tuesday':
      return 'let me just survive today!';
    default:
      return 'Enjoy the rest of the week!';
  }
}

module.exports = { dayMessage };
