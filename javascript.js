

// function pencil(_name,_color,_price){

//     this.name = _name;
//     this.color = _color;
//     this.price = _price;

// }

// pencil.prototype.showpendetails = function(){
//     return 'the pen name is ' + this.name + 'its' +this.color +'color and it \'s price is' + this.price;

// }

// let obj = new pencil ('pinow cristal ','blue', 10)

// console.log(obj.showpendetails())
// //========================================================

// class pen{
//     constructor(name,color,price){
//         this.name = name;
//         this.color = color;
//         this.price = price;
//     }


// showpendetails(){
//     return `the pen name is ${this.mame} it s color is ${this.color} and its price is ${this.price} `

// }
// }

// let objpen = new pencil('big','blue',10)

// console.log(objpen.showpendetails())

// class retengle{
//     constructor(hight,width,color){
//         this.hight = hight;
//         this.width = width;
//         this.color = color;
//     }

//     show(){
//         return ` the rectengle height ${this.hight} and with is ${this.width} its color is ${this.color} `
//     }
// }

// let obj = new retengle(30,90,'blck')
// console.log(obj.show())



// class person{

//     constructor(name, lname,height,width,age,eyescolor,colorskin){
//         this.name = name;
//         this.lname = lname;
//         this.height = height;
//         this.width = width;
//         this.age = age;
//         this.eyescolor = eyescolor;
//         this.colorskin = colorskin;

//     }
//     show(){
//         return `hes name${this.name} end his lname is${this.lname} and his hight ${this.height} and his width${this.width} and his age${this.age} and his eyescolor${this.eyescolor} and his colorskin ${this.colorskin}`
//     }


//     talk(){
//         return `i im talking pashto`
//     }
//     see(){
//         return `i can not see this `
//     }

//     walk(){
//         return `he can not walk`
//     }

// }

// let obj = new person('hamid','shirzad',120,12,4,'blck','wheait')
// document.getElementById('demo').innerHTML = obj.show();


// document.getElementById('a').innerHTML = obj.walk();
// document.getElementById('b').innerHTML = obj.talk();
// document.getElementById('c').innerHTML = obj.see();



// class personage{
//     constructor(name,year){
//         this.name = name;
//         this.year = year;
//     }
//     age(x){
//         return x - this.year;
//     }
// }


// let date = new Date();
// let year = date.getFullYear();

// let mypersonage = new personage("Sharifullah", 1994);
// document.getElementById("demo").innerHTML = "my age is " + mypersonage.age(year) + "Sharifullah is  year old";


// class Car{
//     constructor(brand,){

//         this.brand = brand;

//         }
//         myCarname(){
//             return `my Car name is ${this.brand}`
//         }
// }

// class Model extends Car{
//     constructor(brand,Model){

//         super(brand)

//         this.Model = Model;
//     }
//     showModel(){
//         return this.myCarname() + `and its model is ` + this.Model;
//     }
// }

// let obj = new Car(`toyto`)
// console.log(obj.myCarname())

// let onj = new Model('BMW',2000)
// console.log(obj.showModel())




// class person{
//     constructor(name){
//         this.name = name;

//     }
//     get gpname(){
//         return `the person name is ${this.name}`
//     }
// }

// let pobj = new person('shirzad')
// console.log(pobj.gpname)


// class sinp{
//     constructor(student,tables,computer ){
//         this.student = student;
//         this.tables = tables;
//         this.computer = computer
//     }
//     get gsin(){
//         return `the startupistan class include ${this.student} and ${this.tables} and ${this.computer}`
//     }
// }

// let gis = new sinp('sharifullah',1122,5444);
// console.log(gis.gsin)


class person{
    constructor(mame){
        this.name = this.name; 
    }
    get gpname(){
        return `the person name is  ${this.name}`;
    }

    set spname(pNewName){
        this.name = pNewName;
    }

    age(){
        return `my age is 20 `
    }

    static plname(){
        return `he is static methood `

    }

    

    
}

let pobj = new person('khan')
console.log(pobj.gpname)


pobj.spname = 'sharifullah'
console.log(pobj.gpname)

console.log(pobj.age())
console.log(person.plname())