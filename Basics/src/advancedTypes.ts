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