'use strict'

class House {

  constructor(paramHouse) {
    this.address = paramHouse.address
    this.square_feet = paramHouse.square_feet
    this.num_bedrooms = paramHouse.num_bedrooms || 3
    this.num_baths = paramHouse.num_baths || 2
    this.cost = paramHouse.cost || 320000
    this.down_payment = paramHouse.down_payment || 0.20
    this.sold = paramHouse.sold || false
    this.short_sale = paramHouse.short_sale
    this.has_tenants = paramHouse.has_tenants || false
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

let paramHouse = {
    address : 'address ',
    square_feet : 100,
    num_bedrooms : 2,
    num_baths : 2,
    cost : 12345,
    down_payment : 12345,
    sold : true,
    short_sale : true,
}

const cool = new House(paramHouse);

console.log(cool.to_s())
