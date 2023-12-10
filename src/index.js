class User {
  constructor(
    username,
    fullName,
    email,
    password,
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
    this.email = email
    this.password = password // Do I place this here with a #?
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

const Penelope = new User( // I added all the symptoms and goals on this user to give an idea of the madness
  'PeepeePatient0',
  'Penelope Polpettone',
  'pp@pasta.it',
  'lasagne',
  '12-07-1983',
  'Venice, Italy',
  175,
  95.75,
  [
    'Irregular periods',
    'Acne',
    'Bloating',
    'PMS',
    'Infertility',
    'Weight gain',
    'Difficulty losing weight',
    'Low energy',
    'Sugar / salty cravings',
    'Anxiety',
    'Depression',
    'Insulin resistance',
    'Chronic low grade inflammation',
    'Fertility problems',
  ],
  [
    'Weight loss',
    'Improve fertility',
    'Understand PCOS',
    'Feel good in my own skin',
    'Improve nutrition',
    'Improve skin',
    'Exercise / move more',
    'Improve sleep',
    'Manage stress',
    'Have more energy',
  ],
  '11.23.23',
  7,
  34
)

const Hannah = new User(
  'hannahbutbackwards',
  'Hannah Han',
  'hanhan@vrumvrum.com',
  'chickenfingers',
  '08.02.1990',
  'Frankfurt, Germany',
  145,
  60,
  ['Weight gain', 'Difficulty losing weight', 'Low energy', 'Sugar / salty cravings'],
  ['Feel good in my own skin', 'Improve nutrition', 'Improve skin', 'Exercise / move more'],
  '11.16.2023',
  5,
  28
)

const Jules = new User(
  'julesssss',
  'Jules Winnfield',
  'englishmofo@doyouspeak.it',
  'bangbang',
  '11.03.1994',
  'Los Angeles, United States',
  181,
  90,
  ['Difficulty losing weight', 'Low energy', 'Sugar / salty cravings', 'Anxiety', 'Depression', 'Insulin resistance'],
  ['Exercise / move more', 'Improve sleep', 'Manage stress', 'Have more energy'],
  '11.05.2023',
  4,
  32
)

class Period {
  constructor(user) {
    this.user = user

    this.ovulationPrediction = ovulationPrediction
    // To predict next ovulation: take the first day of the last period, add predicted cycle length and substract 14 days. That is the predicted ovulation day.
    function ovulationPrediction() {
      let firstDayLastPeriodDate = new Date(this.user.firstDayLastPeriod)
      firstDayLastPeriodDate.setDate(firstDayLastPeriodDate.getDate() + this.user.usualCycleLength)
      firstDayLastPeriodDate.setDate(firstDayLastPeriodDate.getDate() - 14)
      return firstDayLastPeriodDate.toLocaleDateString('en-GB')
    }

    //     this.currentPhase = currentPhase
    //     // Current Phase calculation: using Date method situate where the given date is in relation to the firstDayofLastPeriod

    //     this.bleedLengthPrediction = bleedLengthPrediction
    //     /* Bleed Length Prediction Calculation: as the user inputs varying period lengths,
    //     these values get added up and divided by the total amount of inputs, if the new average
    //     is different from the original/previous one, the original number gets replaced by the new
    //     average. The number needs to be an integer and rounded down.*/

    //     this.cycleLengthPrediction = cycleLengthPrediction
    //     /* Cycle Length Prediction Calculation: if the user inputs varying cycle lengths
    //     (due to delays or early periods), these values get added and divided by the total amount
    //     of inputs, if the new average is different from the original, the original number gets
    //     replaced by the new average. The number needs to be an integer and rounded down.*/

    //     this.follicularPrediction = follicularPrediction
    //     // To predict follicular phase take the ovulation prediction day - bleed length

    //     this.fertileWindow = fertileWindow
    //     // To predict fertile window take the ovulationPrediction day and include the 5 calendar days before it.

    //     this.lutealPrediction = lutealPrediction
    //     // To predict luteal phase take the ovulationPrediction and include all the days up to the first day of the next bleed.

    //     this.bleedPrediction = bleedPrediction
    //     // To predict next bleed: take the first day of the last period and add the predicted cycle length to it. Return calendar day.
  }
}

const julesPeriod = new Period(Jules)
console.log(
  'Jules predicted ovulation should be: 23/11/2023. Test is returning: ' + julesPeriod.ovulationPrediction(Jules)
)

const hannahPeriod = new Period(Hannah)
console.log(
  'Hannahs predicted ovulation should be: 30/11/2023. Test is returning: ' + hannahPeriod.ovulationPrediction(Hannah)
)

const penelopePeriod = new Period(Penelope)
console.log(
  'Penelope predicted ovulation should be: 13/12/2023. Test is returning: ' +
    penelopePeriod.ovulationPrediction(Penelope)
)

// Future stuff to implement:
// Use firstDayLastPeriod, usualPeriodLength, usualCycleLength against the day they sign up to let them know in which predicted phase they are in
// Create predictions for their upcoming period phases; ovulation, luteal, follicular and bleed
// Calculate BMI using height and weight
// Use their location information to gather weather info and how that might impact the user depending on where they are on their cycle
// Create an algorithm that suggests readings and daily tips on the topics that are of importance to the user
// Create an algorithm that suggests exercises, activities and techniques according to users needs
