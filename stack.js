class stack {

    constructor() {
        this.array = []
        this.revArray = []
  
    }
  
    IsUnderflow() {
        if (this.array.length == 0) {
            console.log("stack is underflow");
        }
    }
  
    IsOverFlow() {
        if (this.array.length > 5) {
            console.log("stack is overflow");
        }
    }
  
    addElement(element) {
        this.array.push(element)
    }
  
    secondArray(element) {
        this.second_Array.push(element)
    }
  
    print() {
        this.array.map((val, ind) => {
            console.log(val);
        })
    }
  
    reverse() {
        console.log("Now Reverse Array");
  
        for (let i = 0; i < this.array.length; i++) {
            this.revArray[i] = this.array[this.array.length - 1 - i]
        }
  
        console.log(this.reverseArray);
    }
  
    lastElement() {
        console.log("This is Last Element");
        console.log(this.array[0]);
    }
  
    firstElement() {
        console.log("This is First Element");
        console.log(this.array[this.array.length - 1]);
    }
  
    lastSecond() {
        console.log("This is lastSecond Element");
        console.log(this.array[1]);
    }
  
  }
  
  let s1 = new stack();
  s1.IsUnderflow();
  
  s1.addElement(49);
  s1.addElement(17);

  
  s1.IsOverFlow();
  s1.print();
  s1.lastElement()
  s1.firstElement()
  s1.lastSecond()
  
  s1.reverse()



