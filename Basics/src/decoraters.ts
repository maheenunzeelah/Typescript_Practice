function Logger(logString:string){
console.log(logString);
return function (constructor:Function){
    console.log(constructor);
 }
}
function WithTemplate(template:string,hookId:string){
    return function<T extends {new (...args:any[]):{name:string}}>(originalConstructor:T){
        return class extends originalConstructor{
                constructor(..._:any[]){
                    super();
                    // const p=new originalConstructor()
                     const el=document.getElementById(hookId)!;
                     el.innerHTML=template;
                     document.querySelector('h1')!.textContent=this.name;
                }
        }
    }
}
@WithTemplate("<h1>Person</h1>","hook-id")
@Logger("LOGGING_CUSTOM")
class PersonDecorater{
    name="Max";
    constructor(){
        console.log("Creating person");
    }
}
const per=new PersonDecorater();
function Log(target:any,propertyName:string | Symbol){
  console.log(target)
  console.log(propertyName)
}
function Log2(target:any,name:string | Symbol, descriptor:PropertyDescriptor){
console.log(target);
console.log(name);
console.log(descriptor);
}
function Log3(target:any,name:string |Symbol,descriptor:PropertyDescriptor){
    console.log(target);
console.log(name);
console.log(descriptor);
}
function Log4(target:any,name:string | Symbol, position:number){
    console.log(target);
    console.log(name);
    console.log(position);
    }
class Product{
   @Log
   title:string;
   private _price:number;
   @Log2
    set price(val:number){
        this._price=val;
    }
    
    constructor(title:string,p:number){
        this.title=title;
        this._price=p;
    }
    @Log3
    getPriceWithTax(@Log4 tax:number){
        console.log(`Price is ${this._price+tax}`)
    }
}

function AutoBind(_:any,_2:string,descriptor:PropertyDescriptor):PropertyDescriptor{
     const originalMethod=descriptor.value;
    const adjDescripter:PropertyDescriptor={
      configurable:true,
      enumerable:false,
      get(){
        const boundFn=originalMethod.bind(this);
        return boundFn;
      }
    };
    return adjDescripter;
}
class printMessage{
    message="This works";
    @AutoBind
    showMessage(){
        console.log(this.message);
    }
}
const p=new printMessage();
const button=document.querySelector("button")!;
button.addEventListener("click",p.showMessage);