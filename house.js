'use strict'

class House {

  constructor(param) {
    this.address = sortObject.address
    this.square_feet = sortObject.square_feet
    this.num_bedrooms = sortObject.num_bedrooms || 3
    this.num_baths = sortObject.num_baths || 2
    this.cost = sortObject.cost || 320000
    this.down_payment = sortObject.down_payment || 0.20
    this.sold = sortObject.sold || false
    this.short_sale = sortObject.short_sale
    this.has_tenants = sortObject.has_tenants || false
  }

  obscure_address() {
    this.address.replace(/.{10}$/g, '****')
    return this.address
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

let sortObject = {
  address      : 'jakarta selatan',
  square_feet  : 100,
  num_bedrooms : 2,
  num_baths    : 2,
  cost         : '300 juta',
  down_payment : 12345,
  sold         : true,
  short_sale   : '3 month',
  has_tenants  : true,
}

const cool = new House(sortObject)

console.log(cool.to_s())
