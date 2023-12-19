// TRASHED OPTION 2

const Period = require('./period')

class User {
  constructor(username) {
    this.username = username
    this.periodHistory = []
  }

  getPeriod(index) {
    return this.periodHistory[index]
  }

  addPeriod(firstDayOfPeriod, lastDayOfPeriod) {
    const previousPeriod = this.getPeriod(this.periodHistory.length - 1)
    console.log('Previous period: ' + previousPeriod)
    const period = new Period(firstDayOfPeriod, lastDayOfPeriod, previousPeriod)
    this.periodHistory.push(period)
    console.log('Period History: ' + this.periodHistory)
    this.periodHistory.sort((a, b) => a.firstDayOfPeriod - b.firstDayOfPeriod)
  }

  // getCurrentPhase
  // pass last 2 periods and do the calculation inside of this method
  // if there is no 2 periods in the periodHistory throw 'You need to have at least 2 periods added

  // get
}

module.exports = User

// TRASHED VERSION 1
class Period {
  constructor(firstDayOfPeriod, lastDayOfPeriod, usualCycleLength) {
    this.firstDayOfPeriod = new Date(firstDayOfPeriod).getTime() // 11/11/2023 -> 1670870400000
    this.lastDayOfPeriod = new Date(lastDayOfPeriod).getTime() // 11/23/2023 -> 1671878400000
    this.usualBleedLength = Math.floor((lastDayOfPeriod - firstDayOfPeriod) / (24 * 60 * 60 * 1000)) // 11/23/2023 - 11/11/2023 = 1671878400000 - 1670870400000 = 123344ms / 24 (=hours) * 60 (=minutes) * 60 (=seconds) * 1000 (=milliseconds) = x days
    this.usualCycleLength = usualCycleLength // transform into array
    this.bleedLengths = [this.usualBleedLength] //as the user inputs varying period lengths or the app does it automatically, or the app does it and the user edits it
    this.cycleLengths = [this.usualCycleLength] // if/when the user inputs varying cycle lengths (due to delays or early periods), or the app does it, or the app does it and user edits it
  }
  // To predict next ovulation: take the first day of the last period, add predicted cycle length and substract 14 days. That is the predicted ovulation day.
  ovulationPrediction() {
    // console.log('Calls ovulationPrediction')
    let firstDayOfPeriodDate = new Date(this.firstDayOfPeriod)
    // console.log('First Day of Peroid Date: ' + firstDayOfPeriodDate)
    // console.log('Usual Cycle Length: ' + this.usualCycleLength)
    firstDayOfPeriodDate.setDate(firstDayOfPeriodDate.getDate() + this.usualCycleLength) // 4 +32 = 36
    // console.log('First Day of after cycle length calc: ' + firstDayOfPeriodDate)
    firstDayOfPeriodDate.setDate(firstDayOfPeriodDate.getDate() - 14)
    // console.log('First Day of after 14 peroid calc: ' + firstDayOfPeriodDate)
    return firstDayOfPeriodDate.toLocaleDateString('en-GB')
  }

  bleedLengthPrediction() {
    let total = this.bleedLengths.reduce((a, b) => a + b, 0) // these values get added up
    let average = Math.floor(total / this.bleedLengths.length) // and divided by the total amount of inputs. The number needs to be an integer and rounded down.
    return average
  }

  addBleedLength(bleedLength) {
    // stores new bleed length inputs from the user
    this.bleedLengths.push(bleedLength)
  }

  cycleLengthPrediction() {
    let total = this.cycleLengths.reduce((a, b) => a + b, 0) // these values get added
    let average = Math.floor(total / this.cycleLengths.length) // and divided by the total amount of inputs. The number needs to be an integer and rounded down.
    return average
  }

  addCycleLength(cycleLength) {
    // stores new cycle lengths inputs from the user
    this.cycleLengths.push(cycleLength)
  }

  //     this.follicularPrediction = follicularPrediction
  //     // To predict follicular phase take the ovulation prediction day - bleed length

  //     this.fertileWindow = fertileWindow
  //     // To predict fertile window take the ovulationPrediction day and include the 5 calendar days before it.

  //     this.lutealPrediction = lutealPrediction
  //     // To predict luteal phase take the ovulationPrediction and include all the days up to the first day of the next bleed.

  //     this.bleedPrediction = bleedPrediction
  //     // To predict next bleed: take the first day of the last period and add the predicted cycle length to it. Return calendar day.

  //     this.currentPhase = currentPhase
  //     // Current Phase calculation: using Date method situate where the given date is in relation to the firstDayofLastPeriod
}

module.exports = Period
