class Address {
  constructor(recipientFullName, street, houseNr, zip, city, country) {
    this.recipientFullName = recipientFullName
    this.street = street
    this.houseNr = houseNr
    this.zip = zip
    this.city = city
    this.country = country
  }

  static create({ recipientFullName, street, houseNr, zip, city, country }) {
    const newAddress = new Address(recipientFullName, street, houseNr, zip, city, country)

    Address.list.push(newAddress)

    return newAddress
  }

  static list = []
}

module.exports = Address
