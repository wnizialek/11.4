function Phone(brand, price, color, battery) {
	this.brand = brand;
	this.price = price;
    this.color = color;
    this.battery = battery;
};

Phone.prototype.printInfo = function(){
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". Battery life: " + this.battery + " hours.");
}

var iPhone8 = new Phone("Apple", 2000, "grey", 10);
var SamsungGalaxy = new Phone("Samsung", 2100, "black", 11);
var HuaweiP20 = new Phone("Huawei", 2400, "black", 12);
var HtcU12 = new Phone("HTC", 2000, "black", 13);

iPhone8.printInfo();
SamsungGalaxy.printInfo();
uaweiP20.printInfo();
HtcU12.printInfo(); 