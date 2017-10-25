'use strict'

class House {

  constructor(inputData) {
    this.address = inputData.address
    this.square_feet = inputData.square_feet
    this.num_bedrooms = inputData.num_bedrooms || 3
    this.num_baths = inputData.num_baths || 2
    this.cost = inputData.cost || 320000
    this.down_payment = inputData.down_payment || 0.20
    this.sold = inputData.sold || false
    this.short_sale = inputData.short_sale
    this.has_tenants = inputData.has_tenants || false
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****')
  }

  buy(money, good_credit) {
    if (money >= down_payment && good_credit) {
      this.sold = true
    }
  }

  down_payment() {
    return cost * this.down_payment
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

let inputData = {
  address: 'Jl Semper Jaya asdgajsgd',
  square_feet : 100,
  num_bedrooms : 2,
  num_baths : 2,
  cost : 12345,
  down_payment : 12345,
  sold : true,
  short_sale : true

}
const cool = new House(inputData)

console.log(cool.to_s())
cool.hasOwnProperty('address')
