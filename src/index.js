class User {
  constructor(
    username,
    fullName,
    email,
    password,
    birthDate,
    location,
    height,
    weight,
    currentSymptoms,
    goals,
    firstDayLastPeriod,
    usualPeriodLength,
    usualCycleLength
  ) {
    this.username = username
    this.fullName = fullName
    this.email = email
    this.password = password // Do I place this here with a #?
    this.birthDate = birthDate // Do I need to use a specific format?
    this.location = location // I'm putting this in only because I want to connect with the weather report from where the person is
    this.height = height // I want to give the option both in the metric system and the insane US measurements
    this.weight = weight // Same as line above. But for now I'm treating the height as given in cm and the weight in kg. I also want the weight to be a float.
    this.currentSymptoms = currentSymptoms // This is a huge list of options
    this.goals = goals
    this.firstDayLastPeriod = firstDayLastPeriod // To help determine which phase of the cycle the user is in
    this.usualPeriodLength = usualPeriodLength // To help establish bleed phase length
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
  '23.11.23',
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
  '16.11.2023',
  5,
  28
)

const Jules = new User(
  'julesssss',
  'Jules Winnfield',
  'englishmofo@doyouspeak.it',
  'bangbang',
  '03.11.1994',
  'Los Angeles, United States',
  181,
  90,
  ['Difficulty losing weight', 'Low energy', 'Sugar / salty cravings', 'Anxiety', 'Depression', 'Insulin resistance'],
  ['Exercise / move more', 'Improve sleep', 'Manage stress', 'Have more energy'],
  '05.11.2023',
  4,
  32
)

// Future stuff to implement:
// Calculate BMI using height and weight
// Use firstDayLastPeriod, usualPeriodLength, usualCycleLength against the day they sign up to let them know in which predicted phase they are in
// Create predictions for their upcoming period phases; ovulation, lutheal, follicular and bleed
// Use their location information to gather weather info and how that might impact the user depending on where they are on their cycle
// Create an algorithm that suggests readings and daily tips on the topics that are of importance to the user
// Create an algorithm that suggests exercises, activities and techniques according to users needs
