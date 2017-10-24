'use strict'

class House {

  constructor(house) {
    this.address = house['address']
    this.square_feet = house['square_feet']
    this.num_bedrooms = house['num_bedrooms'] || 3
    this.num_baths = house['num_baths'] || 2
    this.cost = house['cost'] || 320000
    this.down_payment = house['down_payment'] || 0.20
    this.sold = house['sold'] || false
    this.short_sale = house['short_sale']
    this.has_tenants = house['has_tenants'] || false
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


let house = {
  address : 'jalan jalan',
  square_feet : 100,
  num_bedrooms : 2,
  num_baths : 2,
  cost : 12345,
  down_payment : 12345,
  short_sale : true,
  has_tenants : true

}

const cool = new House(house)

console.log(cool.to_s())
