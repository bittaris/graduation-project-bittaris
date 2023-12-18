class Period {
  constructor(firstDayOfPeriod, lastDayOfPeriod, previousPeriod) {
    this.firstDayOfPeriod = firstDayOfPeriod
    this.lastDayOfPeriod = lastDayOfPeriod
    this.usualBleedLength = this.calculateBleedLength()
    this.usualCycleLength = this.calculateCycleLength(previousPeriod)
  }

  calculateBleedLength() {
    let lastDayOfPeriodDate = new Date(this.lastDayOfPeriod)
    let firstDayOfPeriodDate = new Date(this.firstDayOfPeriod)
    let bleedLength = lastDayOfPeriodDate.getDate() - firstDayOfPeriodDate.getDate()
    return bleedLength
  }

  calculateCycleLength(previousPeriod) {
    if (previousPeriod) {
      const oneDay = 24 * 60 * 60 * 1000
      const diffDays = Math.round(Math.abs((this.firstDayOfPeriod - previousPeriod.firstDayOfPeriod) / oneDay))
      return diffDays
    } else {
      return null
    }
  }

  predictOvulation() {
    let firstDayOfPeriodDate = new Date(this.firstDayOfPeriod)
    firstDayOfPeriodDate.setDate(firstDayOfPeriodDate.getDate() + this.usualCycleLength)
    firstDayOfPeriodDate.setDate(firstDayOfPeriodDate.getDate() - 14)
    return firstDayOfPeriodDate.toLocaleDateString('en-GB')
  }
}

module.exports = Period
