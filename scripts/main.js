// creating constructor function for web hosting service plans
function Plan(name, price, space, dataTransfer, sitePages, discountMos) {
    this.name = name;
    this.price = price;
    this.space = space;
    this.dataTransfer = dataTransfer;
    this.sitePages = sitePages;
    this.discountMos = discountMos;
}

var basicPlan = new Plan("Basic", 3.99, 100, 1000, 10, [7,8]);
var proPlan = new Plan("Professional", 5.99, 500, 5000, 50, [7,8,12]);
var ultPlan = new Plan("Ultimate", 9.99, 2000, 20000, 500, [7,8]);

console.log("The cost of the " + ultPlan.name + " package is $" + ultPlan.price + " per month." )