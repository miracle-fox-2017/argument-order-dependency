'use strict'

class House {

  constructor(params) {
    this.address = params.address;
    this.square_feet = params.square_feet || 3;
    this.num_bedrooms = params.num_bedrooms || 3;
    this.num_baths = params.num_baths || 2;
    this.cost = params.cost || 320000;
    this.down_payment = params.down_payment || 0.20;
    this.sold = false;
    this.sold = params.sold || false;
    this.short_sale = params.short_sale;
    this.has_tenants = params.has_tenants || false;
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****');
  }

  buy(money, good_credit) {
    if (money >= this.down_payment && good_credit) {
      this.sold = true
    }
  }

  down_payment() {
    return this.cost * this.down_payment
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

const cool = new House({address: 'Jl. raya pondok indah', square_feet: 500, num_bedrooms: 2, num_baths: 5, cost: 100000, down_payment: 100000, sold: true, has_tenants: true});

console.log(cool.to_s())
