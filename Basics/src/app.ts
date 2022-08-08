// type AddFn=(a:number,b:number)=>number;
interface AddFn{
    (a:number,b:number):number;
}
let add:AddFn;
add=(n1,n2)=>{
    return n1+n2;
}
interface Named{
  readonly name?:string;
}
interface Greeting extends Named{
  greet(phrase:string):void;
}
class Person implements Greeting{
    name?:string;
    age=20;
    constructor(n?:string){
      if(n)
      this.name=n;
      else
       console.log("Hi")
    }
    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`);
    }
}

const person=new Person("Max");
console.log(person)
