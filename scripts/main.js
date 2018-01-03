// creating constructor function for web hosting service plans
function Plan(name, price, space, dataTransfer, sitePages, discountMos) {
    this.name = name;
    this.price = price;
    this.space = space;
    this.dataTransfer = dataTransfer;
    this.sitePages = sitePages;
    this.discountMos = discountMos;
}

// creates a method for all sevice plans
Plan.prototype.calcDiscount = function(percentIfDisc) {
    var bestPrice = 0;
    var currDate = new Date();
    var currMo = currDate.getMonth() + 1;
    for (var i = 0; i < this.discountMos.length; i++) {
        if (currMo === this.discountMos[i]) {
            bestPrice = this.price * percentIfDisc;
            break;
        }
        else {
            bestPrice = this.price;
        } 
    }
    return bestPrice;
}

var basicPlan = new Plan("Basic", 3.99, 100, 1000, 10, [7,8]);
var proPlan = new Plan("Professional", 5.99, 500, 5000, 50, [7,8,12,1]);
var ultPlan = new Plan("Ultimate", 9.99, 2000, 20000, 500, [7,8]);


function main() {
    console.log("The cost of the " + ultPlan.name + " package is $" + ultPlan.price + " per month." );
    if (proPlan.calcDiscount(.85) !== proPlan.price) {
        console.log("\nYou received a discount for the " + proPlan.name + " package. " + "The monthly rate is $" + proPlan.calcDiscount(.85).toFixed(2));
    }
    else {
        console.log("\nYou monthly rate for the " + proPlan.name + " is $" + proPlan.price);
    }
}

main();