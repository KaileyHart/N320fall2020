
//Vending Machine Class that defines: firstCandy, secondCandy, firstChips, firstCandyCount, secondCandyCount, and firstChipsCount
class VendingMachine {
    constructor(firstCandy, secondCandy, firstChips, firstCandyCount, secondCandyCount, firstChipsCount) {
        this.firstCandy = firstCandy;
        this.secondCandy = secondCandy;
        this.firstChips = firstChips;
        this.firstCandyCount = 5;
        this.secondCandyCount = 75;
        this.firstChipCount = 121;
    }

    //render() function that uses a javascript template string to return markup with the current stock of the machine.
    render() {
    return `<div><p>${this.firstCandy}: ${this.firstCandyCount}</p></div> <button onClick="buyCandyOne()">Buy ${this.firstCandy}</button>
            <br>
            <hr>
            <div><p>${this.secondCandy}: ${this.secondCandyCount}</p></div> <button onClick="buyCandyTwo()">Buy ${this.secondCandy} Bar</button>
            <br>
            <hr>
            <div> <p>${this.firstChips}: ${this.firstChipCount}</p></div>  <button onClick="buyChipOne()">Buy ${this.firstChips} Chips</button>
        `;
    }

    //methods to buy each of the VendingMachine items. 
    //dfdWhen buying the item, only allow purchase if the stock of the item is above zero. When bought, reduce the stock count by one.
    buyFirstCandy() {
        if(this.firstCandyCount >= 1) {
        this.firstCandyCount--;
        } else {
            alert('This item is out of stock!');
        }
    }
    buySecondCandy() {
        if(this.secondCandyCount >= 1) {
        this.secondCandyCount--;
        }else {
            alert('This item is out of stock!');
        }
    }
    buyFirstChips() {
        if(this.firstChipCount >= 1) {
        this.firstChipCount--; } else {
            alert('This item is out of stock!');
        }
    }
}

//New Instance of VendingMachine class
let mySnacks = new VendingMachine('Snickers', 'Hershey\'s', 'Lays', this.firstCandyCount, this.secondCandyCount, this.firstChipCount);

let div = document.getElementById("vendingDiv");
//renders the new instance
div.innerHTML = mySnacks.render();

//Functions that allow the user to purchase vending machine items and updates the page
function buyCandyOne() {
    mySnacks.buyFirstCandy();
    div.innerHTML = mySnacks.render();
}

function buyCandyTwo() {
    mySnacks.buySecondCandy();
    div.innerHTML = mySnacks.render();
}

function buyChipOne() {
    mySnacks.buyFirstChips();
    div.innerHTML = mySnacks.render();
}