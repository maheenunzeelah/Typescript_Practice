// Code goes here!
abstract class Department{
    // name:string;
    // private employees:string[]=[];
    static fiscalYear=2020;
    protected employees:string[]=[];
    constructor(protected readonly id:string,public name:string){
    }
    
    addEmployees(employee:string){
        this.employees.push(employee);
    }
    static createEmployees(name:string){
        return {name}

    }
   abstract describe(this:Department):void;
   printEmployeeInformation(){
    console.log(this.employees);
    console.log(this.employees.length);
   }
}
class ITDepartment extends Department{
  
   public admins:string[];
   constructor(id:string,admins:string[]){
      super(id,'IT');
      this.admins=admins;
   }
   describe() {
       return `Employee's id is ${this.id} and name is ${this.name}`
   }
} 
class Accounting extends Department{
    private lastReport:string;
    private static instance:Accounting;
    private  constructor(id:string,private reports:string[]){
        super(id,"Accounting");
        this.lastReport=reports[0];

    }
    static getInstance(){
      if(Accounting.instance)
       return this.instance;
      this.instance=new Accounting("d1",[]);
      return this.instance;
    }
    get mostRecentReports(){
    if(!this.lastReport){
     throw new Error("no report exists");
    }
    return this.lastReport;
    }
    set mostRecentReports(report:string){
         if(!report)
          return;
         this.addReports(report); 
    }

    addReports(text:string){
        this.reports.push(text);
        this.lastReport=text;
    }
    addEmployees(employee: string){
       if(employee=="Max")
         return;
       this.employees.push(employee);
    }  
    describe() {
        return `Employee's id is ${this.id} and name is ${this.name}`
    }
}
// const department=new Department("accounting","d1");
// department.addEmployees("John");
// department.printEmployeeInformation();
const it=new ITDepartment("d2",["Maheen"]);
const accounting= Accounting.getInstance();
console.log(accounting.mostRecentReports);
accounting.mostRecentReports="A2";
// const accountingAnother={id:"dd",name:"Maheen",employees:["Maheen"],describe:accounting.describe,addEmployees:accounting.addEmployees}
// accountingAnother.describe();
// console.log(department);
const employee1= Department.createEmployees("Naaaa");
console.log(employee1);
console.log(Department.fiscalYear);