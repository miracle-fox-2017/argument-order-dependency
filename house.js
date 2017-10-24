'use strict'

class House {

  constructor(objek) {
    this.address = objek.address
    this.square_feet = objek.square_feet
    this.num_bedrooms = objek.num_bedrooms || 3
    this.num_baths = objek.num_baths || 2
    this.cost = objek.cost || 320000
    this.down_payment = objek.down_payment || 0.20
    this.sold = objek.sold || false
    this.short_sale = objek.short_sale
    this.has_tenants = objek.has_tenants || false
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

let objek = {
  address      : 'address',
  square_feet  : 100,
  num_bedrooms : 2,
  num_baths    : 2,
  cost         : 12345,
  down_payment : 12345,
  sold         : true,
  short_sale   : true,
}

const cool = new House(objek)

console.log(cool.to_s())
console.log(objek.hasOwnProperty('has_tenants'))
