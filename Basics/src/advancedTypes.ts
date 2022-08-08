type Employee={
  name:string;
  startDate:Date;
}
type Admin={
    name:string;
    privileges:string[];
}
type EmployeeType=Employee & Admin; //intersection type
type u1= number | string;
type u2=boolean | string;
type intersection= u1 & u2;
const intersecType:intersection="Mini";
console.log(intersecType);
const employee:EmployeeType={
  name:"Max",
  startDate:new Date(),
  privileges:["Many"]
}
console.log(employee);
class Car{
    drive(){
        console.log("Drivinga a car...");
    }

}
class Truck{
    drive(){
        console.log("Driving a Truck");
    }
    loadCargo(amount:number){
        console.log("Loading cargo... "+amount);
    }
}
//Type Guards
function printEmployeeInformation(el:EmployeeType){
    if('privileges' in el){
        console.log(el.privileges)
    }
}

type Vehicle=Car |Truck;
const v1=new Car();
const v2=new Truck();
function printVehicleInfo(vehicle:Vehicle){
    if(vehicle instanceof Truck){
        vehicle.loadCargo(200);
    }
}
printVehicleInfo(v2);

interface Bird{
    type:'bird';
    flyingSpeed:number;
}
interface Horse{
    type:'horse'
    runningSpeed:number;
    
}
type Animal= Bird | Horse;
function moveAnimal(animal:Animal){
    switch(animal.type){
        case 'bird':
            console.log(`Running at speed ${animal.flyingSpeed}`);
            break;
        case 'horse':    
            console.log(`Running at speed ${animal.runningSpeed}`);
            break;
    }
}
moveAnimal({type:'bird',flyingSpeed:30});
const userInput=document.getElementById("user-input")! as HTMLInputElement; //Type Casting
userInput.value="abs";
const userData="";
const storedData=userData ?? 'DEFAULT';
console.log(storedData,"nullish coalescing");

interface ErrorContainer{
    [prop:string]:string;
}
const errorBag:ErrorContainer={
    email:"abc@gmail.com"
};