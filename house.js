'use strict'

class House {

  constructor(building) {
    this.address = building.address
    this.square_feet = building.square_feet
    this.num_bedrooms = building.num_bedrooms || 3
    this.num_baths = building.num_baths || 2
    this.cost = building.cost || 320000
    this.down_payment = building.down_payment || 0.20
    this.sold = building.sold || false
    this.short_sale = building.short_sale
    this.has_tenants = building.has_tenants || false
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
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}, ${this.has_tenants}`
  }
}

let bangunan = {
  address: 'address',
  square_feet: 100,
  num_bedrooms: 2,
  num_baths: 2,
  cost: 12345,
  down_payment: 12345,
  sold: true,
  short_sale: true
}

const cool = new House(bangunan)

console.log(cool.to_s())
