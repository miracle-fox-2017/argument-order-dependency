'use strict'

class Car{
    start_car(options){
        if(options && options.hasOwnProperty("headlights")){ // Jika options
            this.headlights = options['headlights'];
        }else{
            this.headlights = true
        }
        //
        // if(options && options['gear']){
        //     this.gear = options['gear']
        // }else{
        //     this.gear = 1
        // }
    }
}

const herbie = new Car()

// When we start the car, the headlights should be on by default
herbie.start_car();

console.log(herbie.headlights) // true

// But what happens when we want to start without headlights?
herbie.start_car({
    headlights: false
});

console.log(herbie.headlights) // true ...KOK BISA?!

// Penjelasan ==> Karena di dalam if clause terdapat statement jika options tidak kosong dan properties dari options sama dengan true maka properties headlights akan berubah sesuai input parameter, sedangkan ketika kita memanggil method start_car kita memasukan value false pada key headlights.
