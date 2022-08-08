// Built in Generics
const names:Array<string>=[];

const promise:Promise<string>=new Promise((resolve)=>{
    setTimeout(()=>resolve("It resolved"),1000); 
})
// Create Generic Functions and Constraints
function merge<T extends object,U extends object>(obj1:T,obj2:U){
   return Object.assign(obj1,obj2);
}
const mergedObj=merge({name:"Max",age:30},{hobbies:["Sports"]});
console.log(mergedObj);

//Keyof Constraint
function extractAndConvert<T extends object, U extends keyof T>(obj:T,key:U){
  return obj[key];
} 
const valueOfObject=extractAndConvert({name:"Max"},'name');
console.log(valueOfObject);

//Gneric Utility
interface CourseGoal{
    title:string,
    startDate:Date;
}
//Partial Generic
function createCourseGoal(
  title:string,
  startDate:Date
):CourseGoal{
let courseGoal:Partial<CourseGoal>={}; //optional arguements temporarily
courseGoal.title=title;
courseGoal.startDate=startDate;
return courseGoal as CourseGoal;
}
const namesRead:Readonly<string[]>=['Max',"Maheen"]; //Readonly generic

// Generics on Class
class DataStorage<T extends string| boolean |number>{
 private data:T[]=[];
 addItems(item:T){
    this.data.push(item)
 }
 removeItem(item:T){
    this.data.slice(this.data.indexOf(item),1);
 }
 getItems(){
    console.log(this.data);
 }
}
const store=new DataStorage();
store.addItems("Brush");
store.getItems();
