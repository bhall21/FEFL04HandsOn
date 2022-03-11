class Employee {
    constructor(name, salary, hireDate) {
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate;
    }
    getName() {
        console.log(this.name.toUpperCase());
    }
    getSalary() {
        console.log(this.salary);
    }
    getHireDate() {
        console.log(this.hireDate);
    }
}
class Manager extends Employee {
    constructor(jobDescription, name, salary, hireDate) {
        super(name, salary, hireDate);
        this.jobDescription = jobDescription;
    }
    ManagerInfo() {
        console.log(this.jobDescription+", "+this.name+", "+this.salary+", "+this.hireDate);
    }
}
class Designer extends Manager {
    constructor(yearsExperience, jobDescription, name, salary, hireDate) {
        super(jobDescription, name, salary, hireDate);
        this.yearsExperience = yearsExperience;
    }
    DesignerInfo() {
        console.log(this.yearsExperience+", " +this.jobDescription+", "+this.name+", "+this.salary+","+this.hireDate);
    }
}
class SalesAssociate extends Designer {
    constructor(degreeCompleted, yearsExperience, jobDescription, name, salary, hireDate) {
        super(yearsExperience, jobDescription, name, salary, hireDate,);
        this.degreeCompleted = degreeCompleted;
    }
    SalesAssociateInfo() {
        console.log(this.degreeCompleted +", "+this.yearsExperience+", " +this.jobDescription+", "+this.name+", "+this.salary+", "+this.hireDate);
    }

}
let manager = new Manager("Manager", "Brad", 50000, "July 2nd, 2010");
let designer = new Designer(11, "Designer", "Janelle", 75000, "January 1st, 2010");
let salesassociate = new SalesAssociate ("AA in Business", 30, "Sales Associate", "Bareth", 150000, "June 12th, 1990");
manager.ManagerInfo();
designer.DesignerInfo();
salesassociate.SalesAssociateInfo();
