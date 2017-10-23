'use strict'

class House {

  constructor(params) {
    this.address = params.address
    this.square_feet = params.square_feet
    this.num_bedrooms = params.num_bedrooms || 3
    this.num_baths = params.num_baths || 2
    this.cost = params.cost || 320000
    this.down_payment = params.down_payment || 0.20
    this.sold = params.sold || false
    this.short_sale = params.short_sale
    this.has_tenants = params.has_tenants || false
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

const argument = {
  address : 'jalan kaskja',
  square_feet: 100,
  num_bedrooms : 2,
  num_baths : 2,
  cost : 12345,

  sold : 12345,
  short_sale : true,
  has_tenants : true,
}

const cool = new House(argument)

console.log(cool.to_s())
