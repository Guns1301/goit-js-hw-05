class Car {
 // Write code under this line
  static getSpecs(car) {
    const {maxSpeed, speed, isOn, distance, price} = car;
     return `maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`;
  }
  
  constructor(obj) {
   this.maxSpeed = obj.maxSpeed; 
   this.speed = 0;
   this.isOn = false;
   this.distance = 0;
   this._price = obj.price;
  }
     
  get price() {
   return this._price;
  }
  
  set price(value) {
   return this._price = value;
  }
  
  turnOn() {
   return this.isOn = true;
  }
  
  turnOff() {
    this.isOn = false;
    this.speed = 0;
   
  }
  
  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
   return this.speed = this.speed + value;
    } else {return this.speed = this.maxSpeed}
  }
  
  decelerate(value) {
   if (this.speed - value > 0) {
     return this.speed = this.speed - value;
   } else {return this.speed = 0}
  }
  
  drive(hours) {
   if (this.isOn === true) {
     return this.distance += hours * this.speed;
   } else {return this.distance}
  }
}
 
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

//console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
