'use strict'

class House {

  constructor(obj) {
    this.address = obj.address
    this.square_feet = obj.square_feet
    this.num_bedrooms = obj.num_bedrooms || 3
    this.num_baths = obj.num_baths || 2
    this.cost = obj.cost || 320000
    this.down_payment = obj.down_payment || 0.20
    this.sold = obj.sold || false
    this.short_sale = obj.short_sale
    this.has_tenants = obj.has_tenants || false
  }

  obscure_address() {
    this.address.replace(/.{10}$/g, '****')
    return this.address
  }

  buy(money, good_credit) {
    if (money >= this.down_payment &&  good_credit) {
      this.sold = null
    }
    return this.sold
  }

  down_payment() {
    return cost * this.down_payment
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}


let obj = {
  address : "jalan. iskandar",
  square_feet : 12,
  num_bedrooms : 10,
  num_baths : 4,
  cost : 1400000,
  down_payment : 4000,
  sold : false,
  short_sale : true,
  has_tenants : true
}

const cool = new House(obj)

console.log(cool.to_s())
console.log(cool.buy(800, 1800))
