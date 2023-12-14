const Period = require('./period')

class User {
  constructor(username, firstDayOfPeriod, lastDayOfPeriod, usualCycleLength) {
    this.username = username
    this.period = new Period(firstDayOfPeriod, lastDayOfPeriod, usualCycleLength)
  }
}

module.exports = User
