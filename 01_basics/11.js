//Dates And Time

let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());//((6/5/2024))
console.log(typeof mydate);

let mycreateddate= new Date(2024,5,5);//month 0 se shuru hua qki array h (YYYY-MM-DD)
console.log(mycreateddate.toDateString());

let mycreateddate1= new Date("06-05-2024");
console.log(mycreateddate1.toLocaleString());



let mytimestamp= Date.now
console.log(mytimestamp);
console.log(mycreateddate1.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);//5 for june qki 0 se shuru hua h 
console.log(newDate.getDay());


// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})