'use strict'

class House {

  constructor(arg) {
    this.address = arg.address
    this.square_feet = arg.square_feet
    this.num_bedrooms = arg.num_bedrooms || 3
    this.num_baths = arg.num_baths || 2
    this.cost = arg.cost || 320000
    this.down_payment = arg.down_payment || 0.20
    this.sold = arg.sold || false
    this.short_sale = arg.short_sale
    this.has_tenants = arg.has_tenants || false
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****')
  }

  buy(money, good_credit) {
    if (money >= this.down_payment && good_credit) {
      return this.sold = true
    }
    return false
  }

  dp() {
    return this.cost * this.down_payment
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

let arg = {
  address: 'address',
  square_feet: 100,
  num_bedrooms: 2,
  num_baths: 2,
  cost: 12345,
  down_payment: 12345,
  sold: true,
  short_sale: true,
  has_tenants: null,
}

const cool = new House(arg)

console.log(cool.obscure_address());
console.log(cool.buy(100, 100));
console.log(cool.dp());
console.log(cool.to_s())
