// SECOND TRASHED OPTION

const Period = require('./period')
const User = require('./user')
const axios = require('axios')

const jules = new User('julesssss')
// ascending
jules.addPeriod('10.06.2023', '10.10.2023')
jules.addPeriod('11.05.2023', '11.09.2023')
jules.addPeriod('12.03.2023', '12.07.2023')
//descending
//jules.addPeriod('12.03.2023', '12.07.2023')
//jules.addPeriod('11.05.2023', '11.09.2023')
//jules.addPeriod('10.06.2023', '10.10.2023')

//const hannah = new User('hannahbutbackwards')
// ascending
// hannah.addPeriod('10.13.2023', '10.18.2023')
// hannah.addPeriod('11.16.2023', '11.21.2023')
// hannah.addPeriod('12.24.2023', '12.30.2023')

//const penelope = new User('peepeePatient0')
// ascending
// penelope.addPeriod('10.21.2023', '10.28.2023')
// penelope.addPeriod('11.23.2023', '11.30.2023')
// penelope.addPeriod('12.27.2023', '01.04.2024')

console.log('_____________________________________Jules tests_____________________________________')

console.log('Jules predicted ovulation: 23/11/2023. Test returns: ' + jules.getPeriod(0).predictOvulation())

console.log('Jules bleed length: 4. Test returns: ' + jules.getPeriod(0).getBleedLength())

console.log('_____________________________________Hannah tests_____________________________________')

// console.log('Hannahs predicted ovulation: 30/11/2023. Test returs: ' + hannah.getPeriod(0).predictOvulation())

// console.log('Hannahs bleed length: 5. Test returns: ' + hannah.getPeriod(0).getBleedLength())

// console.log('_____________________________________Penelope tests_____________________________________')

// console.log('Penelope predicted ovulation: 13/12/2023. Test returns: ' + penelope.getPeriod(0).predictOvulation())

// console.log('Penelope bleed length: 7. Test returns: ' + penelope.getPeriod(0).getBleedLength())

________________________________________________________

//FIRST TRASHED OPTION

// const Period = require('./period')
// const User = require('./user')
// const axios = require('axios')

const penelope = new User('PeepeePatient0', '11.23.2023', '11.30.2023', 34) // I added all the symptoms and goals on this user to give an idea of the madness
// penelope.period.addBleedLength(7)

const hannah = new User('hannahbutbackwards', '11.16.2023', '11.21.2023', 28)
// hannah.period.addBleedLength(5)

const jules = new User('julesssss', '11.05.2023', '11.09.2023', 32)

// jules.period.addBleedLength(4)

// jules.addPeriod(firstDayLastPeriod, usualBleedLength, usualCycleLength)

console.log('_____________________________________Jules tests_____________________________________')

console.log('Jules predicted ovulation should be: 23/11/2023. Test is returning: ' + jules.period.ovulationPrediction())

// jules.period.addBleedLength(2)
// console.log(
//   'Jules bleed length prediction should be updated from 4 to 3. Test says: ' + jules.period.bleedLengthPrediction()
// )

// jules.period.addCycleLength(28)
// console.log("Jules's cycle length should be updated from 32 to 30. Test says: " + jules.period.cycleLengthPrediction())

console.log('_____________________________________Hannah tests_____________________________________')

console.log(
  'Hannahs predicted ovulation should be: 30/11/2023. Test is returning: ' + hannah.period.ovulationPrediction()
)

// hannah.period.addBleedLength(7)
// console.log(
//   "Hannah's bleed length prediction should be updated from 5 to 6. Test says: " + hannah.period.bleedLengthPrediction()
// )

// hannah.period.addCycleLength(40)
// console.log(
//   "Hannah's cycle length should be updated from 28 to 34. Test says: " + hannah.period.cycleLengthPrediction()
// )

console.log('_____________________________________Penelope tests_____________________________________')

console.log(
  'Penelope predicted ovulation should be: 13/12/2023. Test is returning: ' + penelope.period.ovulationPrediction()
)

// Penelope.period.addBleedLength(3)
// console.log(
//   "Penelope's bleed length prediction should be updated from 7 to 5. Test says: " +
//     penelope.period.bleedLengthPrediction()
// )

// penelope.period.addCycleLength(30)
// console.log(
//   "Penelope's cycle length should be updated from 34 to 32. Test says: " + penelope.period.cycleLengthPrediction()
// )

// Future stuff to implement:
// Use firstDayLastPeriod, usualPeriodLength, usualCycleLength against the day they sign up to let them know in which predicted phase they are in
// Create predictions for their upcoming period phases; ovulation, luteal, follicular and bleed
// Calculate BMI using height and weight
// Use their location information to gather weather info and how that might impact the user depending on where they are on their cycle
// Create an algorithm that suggests readings and daily tips on the topics that are of importance to the user
// Create an algorithm that suggests exercises, activities and techniques according to users needs
