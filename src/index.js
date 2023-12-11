const Period = require('./period')
const User = require('./user')

const Penelope = new User( // I added all the symptoms and goals on this user to give an idea of the madness
  'PeepeePatient0',
  'Penelope Polpettone',
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

// Jules.addPeriod(firstDayLastPeriod, usualBleedLength, usualCycleLength)

console.log('_____________________________________Jules tests_____________________________________')

const julesPeriod = new Period(Jules.firstDayLastPeriod, Jules.usualBleedLength, Jules.usualCycleLength)
console.log('Jules predicted ovulation should be: 23/11/2023. Test is returning: ' + julesPeriod.ovulationPrediction())

julesPeriod.addBleedLength(2)
console.log(
  'Jules bleed length prediction should be updated from 4 to 3. Test says: ' + julesPeriod.bleedLengthPrediction()
)

julesPeriod.addCycleLength(28)
console.log("Jules's cycle length should be updated from 32 to 30. Test says: " + julesPeriod.cycleLengthPrediction())

console.log('_____________________________________Hannah tests_____________________________________')

const hannahPeriod = new Period(Hannah.firstDayLastPeriod, Hannah.usualBleedLength, Hannah.usualCycleLength)
console.log(
  'Hannahs predicted ovulation should be: 30/11/2023. Test is returning: ' + hannahPeriod.ovulationPrediction()
)

hannahPeriod.addBleedLength(7)
console.log(
  "Hannah's bleed length prediction should be updated from 5 to 6. Test says: " + hannahPeriod.bleedLengthPrediction()
)

hannahPeriod.addCycleLength(40)
console.log("Hannah's cycle length should be updated from 28 to 34. Test says: " + hannahPeriod.cycleLengthPrediction())

console.log('_____________________________________Penelope tests_____________________________________')

const penelopePeriod = new Period(Penelope.firstDayLastPeriod, Penelope.usualBleedLength, Penelope.usualCycleLength)
console.log(
  'Penelope predicted ovulation should be: 13/12/2023. Test is returning: ' + penelopePeriod.ovulationPrediction()
)

penelopePeriod.addBleedLength(3)
console.log(
  "Penelope's bleed length prediction should be updated from 7 to 5. Test says: " +
    penelopePeriod.bleedLengthPrediction()
)

penelopePeriod.addCycleLength(30)
console.log(
  "Penelope's cycle length should be updated from 34 to 32. Test says: " + penelopePeriod.cycleLengthPrediction()
)

// Future stuff to implement:
// Use firstDayLastPeriod, usualPeriodLength, usualCycleLength against the day they sign up to let them know in which predicted phase they are in
// Create predictions for their upcoming period phases; ovulation, luteal, follicular and bleed
// Calculate BMI using height and weight
// Use their location information to gather weather info and how that might impact the user depending on where they are on their cycle
// Create an algorithm that suggests readings and daily tips on the topics that are of importance to the user
// Create an algorithm that suggests exercises, activities and techniques according to users needs
