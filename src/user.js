class User {
  constructor(
    username,
    fullName,
    birthDate,
    location,
    height, // in cm
    weight, // in kg, but the number is a float so XX.XXkg
    currentSymptoms,
    goals,
    firstDayLastPeriod, // date
    usualBleedLength, // in days
    usualCycleLength // in days
  ) {
    this.username = username
    this.fullName = fullName
    this.birthDate = birthDate // Do I need to use a specific format?
    this.location = location // I'm putting this in only because I want to connect with the weather report from where the person is
    this.height = height // I want to give the option both in the metric system and the insane US measurements
    this.weight = weight // Same as line above. But for now I'm treating the height as given in cm and the weight in kg. I also want the weight to be a float.
    this.currentSymptoms = currentSymptoms
    this.goals = goals
    this.firstDayLastPeriod = firstDayLastPeriod // To help determine which phase of the cycle the user is in
    this.usualBleedLength = usualBleedLength
    this.usualCycleLength = usualCycleLength // To help establish when ovulation occurs and situate the other phases
  }
}

module.exports = User
