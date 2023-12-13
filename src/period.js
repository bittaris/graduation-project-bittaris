class Period {
  constructor(firstDayOfPeriod, lastDayOfPeriod, usualBleedLength, usualCycleLength) {
    this.firstDayOfPeriod = firstDayOfPeriod
    this.lastDayOfPeriod = lastDayOfPeriod
    this.usualBleedLength = usualBleedLength // transform into array
    this.usualCycleLength = usualCycleLength // transform into array
    this.bleedLengths = [this.usualBleedLength] //as the user inputs varying period lengths or the app does it automatically, or the app does it and the user edits it
    this.cycleLengths = [this.usualCycleLength] // if/when the user inputs varying cycle lengths (due to delays or early periods), or the app does it, or the app does it and user edits it
  }
  // To predict next ovulation: take the first day of the last period, add predicted cycle length and substract 14 days. That is the predicted ovulation day.
  ovulationPrediction() {
    let firstDayOfPeriodDate = new Date(this.firstDayOfPeriod)
    firstDayOfPeriodDate.setDate(firstDayOfPeriodDate.getDate() + this.usualCycleLength)
    firstDayOfPeriodDate.setDate(firstDayOfPeriodDate.getDate() - 14)
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
