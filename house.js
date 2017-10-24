class House {
  constructor(address, square_feet, num_bedrooms, num_baths, cost, down_payment, sold, short_sale, has_tenants){
    this.address = args.address
    this.square_feet = args.square_feet
    this.num_bedrooms = args.num_bedrooms || 3
    this.num_baths = args.num_baths || 2
    this.cost = args.cost || 320000
    this.down_payment = args.down_payment || 0.20
    this.sold = args.sold || false
    this.short_sale = args.short_sale
    this.has_tenants = has_tenants || false
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

const args = {
  address: 'address',
  square_feet: 100,
  num_bedrooms: 2,
  num_baths: 2,
  cost: 12345,
  down_payment: 12345,
  sold: true,
  short_sale: true
}

const cool = new House(args)

console.log(cool.to_s())
