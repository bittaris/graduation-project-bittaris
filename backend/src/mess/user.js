// TRASHED VERSION 2

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

// TRASHED VERSION 1

const Period = require('./period')
class User {
  period
  constructor(
    username,
    fullName,
    birthDate,
    location,
    height, // in cm
    weight, // in kg, but the number is a float so XX.XXkg
    currentSymptoms,
    goals,
    firstDayOfPeriod, // date
    lastDayOfPeriod, // date
    usualBleedLength, // in days
    usualCycleLength // in days
    // period history []
  ) {
    this.username = username
    this.fullName = fullName
    this.birthDate = birthDate // Do I need to use a specific format?
    this.location = location // I'm putting this in only because I want to connect with the weather report from where the person is
    this.height = height // I want to give the option both in the metric system and the insane US measurements
    this.weight = weight // Same as line above. But for now I'm treating the height as given in cm and the weight in kg. I also want the weight to be a float.
    this.currentSymptoms = currentSymptoms
    this.goals = goals
    this.period = new Period(firstDayOfPeriod, lastDayOfPeriod, usualBleedLength, usualCycleLength) // To help determine which phase of the cycle the user is in
    // this.periodHistory = []

    // To help establish when ovulation occurs and situate the other phases
  }

  // addPeriod(firstDayLastPeriod, usualBleedLength, usualCycleLength)

  //   get currentPhaseOfLastPeriod(){
  //     const lastPeriod =
  //   }
}

module.exports = User
