
const users = [
    {firstName :"akshsay", lastName : "Saini", age : "26"},
    {firstName :"donald", lastName : "trump", age : "70"},
    {firstName :"deepika", lastName : "padukone", age : "35"},
    {firstName :"elon", lastName : "musk", age : "50"}

]

const age30 = users.filter((x)=> x.age >30).map((x)=> x.firstName)
// console.log(age30);

const data = [
    { name: "John", age: 25, city: "New York" },
    { name: "Alice", age: 30, city: "Los Angeles" },
    { name: "Bob", age: 35, city: "San Francisco" }
  ];
  
//   console.table(data);

  let employees = [
    {name: 'john', salary: 90000, hireDate: "July 1, 2010"},
    {name: 'david', salary: 75000, hireDate: "August 15, 2009"},
    {name: 'ana', salary: 80000, hireDate: "December 12, 2011"}
    ];
   

    // employees.sort((a,b)=>
    //   a.salary - b.salary
    // )
    
    employees.sort((a,b) => {
        if(a.name > b.name){
            return -1
        }
        if(b.name >a.name){
            return 1
        }
        return 0
    })
    console.log(employees)
    
      
//ascending sort
// var x = employees.sort((x, y)=> 
//      x.salary - y.salary
// );
//   console.log(x);

// employees.sort( function( a , b){
//     if(a.name > b.name) return 1;
//     if(a.name < b.name) return -1;
//     return 0;
// });

// console.log(employees);

