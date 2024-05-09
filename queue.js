// queue opration 

class queue {
    constructor() {
        this.array = []
        this.size = 5
    }

    insertElement(element) {
        if (this.array.length < this.size){
            this.array.push(element)
        }
        else{
            console.log("This Is overFlow");
        }
    }

    removeIndex(index){
        for (let i = index; i < this.array.length; i++) {            
            this.array[i]  = this.array[i+1]
        }
        this.array.length = this.array.length-1
    }

    addElement(value,index){
        for (let i = (this.array.length -1); i >=index; i--) {
            
            this.array[i+1] = this.array[i]
        }
        this.array[index] = value

        console.log(this.array);
    }

    print(){
        if (this.array.length!==0) {
            this.array.map((val,index)=>{
                console.log(val);
            })
        }
        else{
            console.log("underflow");
        }
    }
}


let s1 = new queue()
s1.insertElement(49)
s1.insertElement(17)
s1.insertElement(21)
s1.insertElement(66)
s1.insertElement(32)

s1.removeIndex(2)
s1.addElement(1028,1)

s1.print()