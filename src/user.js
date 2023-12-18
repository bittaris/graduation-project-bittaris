const Period = require('./period')

class User {
  constructor(username) {
    this.username = username
    this.periodHistory = []
  }

  addPeriod(firstDayOfPeriod, lastDayOfPeriod) {
    const previousPeriod = this.periodHistory[this.periodHistory.length - 1]
    const period = new Period(firstDayOfPeriod, lastDayOfPeriod, previousPeriod)
    this.periodHistory.push(period)
  }

  // getCurrentPhase
  // pass last 2 periods and do the calculation inside of this method
  // if there is no 2 periods in the periodHistory throw 'You need to have at least 2 periods added

  // get
}

module.exports = User
