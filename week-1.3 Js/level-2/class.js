class Animal{
    constructor(name,legs,speaks){
        this.name=name;
        this.legs=legs;
        this.speaks=speaks;
    }
    speak(){
        console.log("hello"+this.speaks);
    }
}

let a1=new Animal(`dog`,4,`barks`);
a1.speak();