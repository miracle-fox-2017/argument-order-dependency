'use strict'

class House {

  constructor(data) {
    this.address = data.address
    this.square_feet = data.squareFeet
    this.num_bedrooms = data.num_bedrooms || 3
    this.num_baths = data.num_baths || 2
    this.cost = data.cost || 320000
    this.down_payment = data.down_payment || 0.20
    this.sold = data.sold || false
    this.short_sale = data.short_sale
    this.has_tenants = data.has_tenants || false
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****')

  }

  buy(money, good_credit) {
    if (money >= this.down_payment && good_credit) {
      return this.sold = true
    }
  }

  down_payment() {
    return this.cost * this.down_payment

  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

let data = {
  address       : 'addresssdasdsadasdsadsadas',
  squareFeet    : 12,
  num_bedrooms  : 22,
  num_baths     : 22,
  cost          : 20000,
  down_payment  : true,
  sold          : false,
  short_sale    : true,
  has_tenants   :true
}

const cool = new House(data)
//console.log(cool);
console.log(cool.to_s())
