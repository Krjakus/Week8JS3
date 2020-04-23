'use string';
//task 1
/*
let lim1, lim2, i, a;
lim1=5;
lim2=20;
console.log('cycle "for"');
for (i=lim1,a=0;i<=lim2;i++) {
    a+=i;
    console.log(a+" "+i);
}
console.log('cycle "while"');
i=lim1;a=0;
while(i<=lim2){
a+=i;
    console.log(a+" "+i);
i++;
}
console.log("Function Sum");
console.log(sum(lim1,lim2));


function sum(x,y) {
    for (i=x,a=0;i<=y;i++) {
        a+=i;
    }
    return a;
}
*/
//task 2
/*
let x=5;y=20;
let func = (x,y) => {return x*y};
alert(func(x,y));
*/
//task 3
/*
let num=[],i;
for (i=0;i<=15;i++){
    num.push(Math.floor(Math.random()*10)); //для Math.random пришлось отключить режим 'use string'

}
console.log(num);
console.log("length Array");
console.log(num.length);
console.log("even Num");
i=0;
while (i<num.length){
    console.log(num[i]+" "+i);
    i+=2
}
console.log("even Array Num");
i=0;
while (i<num.length){
    if(num[i]%2==0){
        console.log(num[i]+" "+i);
    }
    i++;
}
console.log("null Num ArrayIndex");
i=0;
while(i<num.length){
    if(num[i]==0){
        console.log(i);
    }
    i++;
}
console.log("sum Null Num Array");
i=0;
let sum=0;
while(i<num.length){
    if(num[i]==0){
        sum++;
    }
    i++;
}
console.log(sum);
*/
//task 4
/*
const car={
    carMake:        "Tesla",
    model:          "Type S",
    range:          "391 Mi",
    battery:        "Long Range",
    supercharging:  "200 kW",
    Acceleration:   "2.3",
};
console.log(car);
*/
//task 5
/*
function Book(author,name,yearOfPublishing,publisher) {
    this.author = author;
    this.name = name;
    this.yearOfPublishing = yearOfPublishing;
    this.publisher = publisher;
    this.say= function () {
        return "...но книга лучше!"
    }
}
function EBook(author,name,yearOfPublishing,publisher,format,electronicNumber) {
    this.author = author;
    this.name = name;
    this.yearOfPublishing = yearOfPublishing;
    this.publisher = publisher;
    this.format = format;
    this.electronicNumber = electronicNumber;
}

EBook.prototype=new Book();

const Book1=new Book("Jack London", "Wite Fang", "1906","Macmillan Publishers");
const EBook1=new EBook("Jack London", "Wite Fang", "1906","Macmillan Publishers", "pdf","#0001");

console.log(EBook1.say());
console.log(Book1);
console.log(EBook1);
*/


