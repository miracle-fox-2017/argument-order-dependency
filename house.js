'use strict'

class House {
    constructor(house){
        this.address=house.address
        this.square_feet=house.squareFeet
        this.num_bedrooms=house.numBedrooms || 3
        this.num_baths=house.numBaths || 2
        this.cost=house.cost || 320000
        this.down_payment=house.downPayment || 0.20
        this.sold=house.sold || false
        this.short_sale=house.shortSale
        this.has_tenants=house.hasTenants || false
    }

    obscure_address(){
        return this.address.replace(/.{10}$/g,"****");
    }

    buy(money,good_credit){
        if(money >= down_payment && good_credit){
            this.sold = true
        }
    }

    down_payment(){
        return cost * this.down_payment
    }

    to_s(){
        return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
    }
}

const param={
    address:"onyetenyevwe",
    squareFeet:150,
    numBedrooms:3,
    numBaths:2,
    cost:1300000000,
    downPayment:300000000,
    sold:1250000000,
    shortSale:true,
    hasTenants:true

}
const cool = new House(param);

console.log(cool.to_s());
