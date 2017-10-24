'use strict'

class House {

  constructor(args) {
    this.address = args.address
    this.square_feet = args.square_feet
    this.num_bedrooms = args.num_bedrooms || 3
    this.num_baths = args.num_baths || 2
    this.cost = args.cost || 320000
    this.down_payment = args.down_payment || 0.20
    this.sold = args.sold || false
    this.short_sale = args.short_sale
    this.has_tenants = args.has_tenants || false
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

const param = {
    address : 'Jl. Bank no. 5',
    square_feet : '100',
    num_bedrooms : 2,
    num_baths : 2,
    cost : 320000,
    down_payment : 0.20,
    sold : false,
    short_sale : true,
    has_tenants : true
}
const cool = new House(param)

console.log(cool.to_s())
