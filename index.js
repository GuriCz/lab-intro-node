class SortedList {
  constructor() {
    this.items = [];
    this.length = this.itmes.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    this.items.indexOf(pos);
    if (pos > this.items.length){
      throw new Error('OutOfBounds');
    }
  }

  max() {
    getMaxOfArray(this.items);
    if (this.items.length == 0){
      throw new Error('EmptySortedList');
    }
  }

  min() {
    getMinOfArray(this.items);
    if (this.items.length == 0){
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    let sum = 0;
    for (let i = 0; i < this.items.length; i++){
      sum += this.items[i];
    }
    return sum
  }

  avg() {
    let sum = 0;
    let average = sum/this.items.length; 
    for (let i = 0; i < this.items.length; i++){
      sum += this.items[i];
    }
    return average
  }
}

module.exports = SortedList;
