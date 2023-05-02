// let obj = {
//     name : "shamaiel",
//     age : 24,
//     color : " brown"

// }
// Object.freeze(obj)
// obj.name = "rahil"
// // console.log(obj);

// hero()
// function hero(){
//     let age = 24
//     //  age = 13
//     console.log(age)
// }



/*
let mydetails = {
    firstName : "shamiel",
    lastName : "wani",
    fullName : function (){
        return  this.firstName + " " + this.lastName
    },
    color : "brown"
    
}
let person1 ={
    firstName : "mmmmm",
    lastName : "kkkk"
}

var h = mydetails.fullName.call(person1)
  console.log(h)

*/

/*
function Students (firstName, lastName, otherPersonName ){
    this.firstName = firstName
    this.lasttName = lastName
    this.sayHi = function (){
        console.log("Hi" + " "+ otherPersonName );
    }

}

let student1 = new Students ("shama","wanmi", "kk")
let student2 = new Students ("vooo","shoo", "oo")
// let v = student1.sayHi()
console.log(student2.sayHi())



function sayfullName(){
return this.firstName + " "+ this.lastName
}
const per1 ={
    firstName : "ramesh",
    lastName : "dubey"
}

let newFun = sayfullName.call(per1)
console.log(newFun());
*/


var  name = "masai"
var bag = ""
for(var i=0; i< name.length; i++)
{
    if(name[i] !== 's'){
        bag = bag + name[i]
    }
}
console.log(bag);
