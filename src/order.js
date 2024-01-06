const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const orderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', autopopulate: true },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', autopopulate: true }],
  deliveryAddress: { type: mongoose.Schema.Types.ObjectId, ref: 'Address', autopopulate: true },
})

class Order {
  async addDeliveryAddress(deliveryAddress) {
    let newAddress = await Address.create({ deliveryAddress: deliveryAddress })
    this.deliveryAddress = newAddress
    await this.save()
  }
}

orderSchema.plugin(autopopulate)

orderSchema.loadClass(Order)

module.exports = mongoose.model('Order', orderSchema)
