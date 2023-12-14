class Period {
  constructor(firstDayOfPeriod, lastDayOfPeriod, usualCycleLength) {
    this.firstDayOfPeriod = firstDayOfPeriod
    this.lastDayOfPeriod = lastDayOfPeriod
    this.usualBleedLength = this.calculateBleedLength(lastDayOfPeriod, firstDayOfPeriod)
    this.usualCycleLength = usualCycleLength
  }

  ovulationPrediction() {
    //console.log('Calls ovulationPrediction')
    //console.log(this.firstDayOfPeriod)
    let firstDayOfPeriodDate = new Date(this.firstDayOfPeriod)
    //console.log('First Day of Period Date: ' + firstDayOfPeriodDate)
    //console.log('Usual Cycle Length: ' + this.usualCycleLength)
    firstDayOfPeriodDate.setDate(firstDayOfPeriodDate.getDate() + this.usualCycleLength) // 4 +32 = 36
    //console.log('First Day of after cycle length calc: ' + firstDayOfPeriodDate)
    firstDayOfPeriodDate.setDate(firstDayOfPeriodDate.getDate() - 14)
    //console.log('First Day of after 14 period calc: ' + firstDayOfPeriodDate)
    return firstDayOfPeriodDate.toLocaleDateString('en-GB')
  }

  calculateBleedLength(lastDayOfPeriod, firstDayOfPeriod) {
    let lastDayOfPeriodDate = new Date(this.lastDayOfPeriod)
    let firstDayOfPeriodDate = new Date(this.firstDayOfPeriod)
    let bleedLength = lastDayOfPeriodDate.setDate(lastDayOfPeriodDate.getDate() - firstDayOfPeriodDate.getDate())
    return bleedLength
  }
}

module.exports = Period
