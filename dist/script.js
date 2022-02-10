
// alert("Do you think to know or you know?");
/*var phrase ="Strings are cool ";
document.write( phrase);
document.write(phrase.length);
document.write(phrase.toUpperCase());
document.write(phrase.charAt(1));
document.write(phrase.indexOf("S"));
document.write(phrase.lastIndexOf("o"));
document.write(phrase.substring(phrase.indexOf("s"), 12));
document.write(phrase.endsWith("cool"));
document.write(phrase.includes("ring"));
var text ="are cool";
document.write(phrase.includes(text));
document.write(phrase + "hehe " +text);*/
/*document.write(2+2);
var number= -2;
document.write(Math.max(number, -4));
var number2= 2.5;
var number1=6;
document.write(Math.round(number2));
document.write(Math.pow(number1,3));
document.write(Math.sqrt(number1));


/*var name = window.prompt("what is yout name?");
var age = window.prompt("How old are you?");


document.write("Hey " + name + ",how are you todey? Do you like being " + age +  " years old?";*/



/*var num1 = window.prompt("Enter a number");
var num2 = window.prompt("Enter another number");
num1 = parseInt(num1);
num2 = parseInt(num2);
document.write(num1 + num2);*/
/*
var fruits = new Array("Apples","Oranges","Peach");
document.write(fruits);

var fruits = [" Apples","Oranges","Peach"];
document.write(fruits);
 document.write(fruits[0]);
 document.write(fruits.length);
fruits[0]= "Oranges";
document.write(fruits);

var fruits1 = " Apples, Oranges, Peaches";
fruits1 = fruits1.split(",");
document.write(fruits1[2]);

function sayHi() {

  document.write("<h1>Hallo Ze</h2>");
}
sayHi();
function sayHi1(name) {

  document.write("<h1>Hallo"+ name + " znameniti </h2>");
}
sayHi1(" Zeljko");
sayHi1(" Urose");

function addition(num1,num2) {
  return num1 + num2;
}

document.write(addition(3,6));

var addedNumbers = addition(3,6);
document.write(addedNumbers);


var nucleus = document.getElementById("nucleus");
nucleus.innerHTML = "";


function handleClick(ze){
  ze.innerHTML = "hehe";


}*/

var image = document.getElementById("image");
image.addEventListener("mouseover", function(){
  this.width ="29"
});
image.addEventListener("mouseout", function(){
  this.width ="26";


});
var image1 = document.getElementById("image1");
image1.addEventListener("mouseover", function(){
  this.width ="22"
});
image1.addEventListener("mouseout", function(){
  this.width ="20";


});
var image2 = document.getElementById("image2");
image2.addEventListener("mouseover", function(){
  this.width ="22"
});
image2.addEventListener("mouseout", function(){
  this.width ="19";


});

var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

button.addEventListener("click",function(){
  var newMesages = document.createElement("li");
  newMesages.innerHTML = textbox.value;
  messages.appendChild(newMesages);
  textbox.value= "";
});

/*var isMail = true;
if(isMale){
  document.write("You are male");

};
/*
var isMail = true;
var isTall = false;

if(isMale && isTall){
  document.write("You are male and tall");
} else {
  document.write("you are not male and tall");
};

var isMail = true;
var isTall = false;
if(isMale || isTall){
  document.write("You are male and tall");
} else {
  document.write("you are not male and tall");
};

var isMail = true;
var isTall = false;
if(isMale && isTall){
  document.write("You are male and tall");
} else if (isMale && !isTrue) {
  document.write("You are small male");

} else if (!isMale && isTall) {
  document.write("You are not male ,but you are tall")

}else {
  document.write("you are not male and tall");
};

function max(num1, num2, num3)  {
  if (num1>=num2 && num1>=num3) {
    return num1;

  }else if (num2 >= num1 && num2 >= num3) {
    return num2;
  }else {
    return num3;
  }

};

document.write(max(4,7,3));


if ("phrase" = "phrase") {
  document.write("True");

};
*/

/*function getDayName(dayNum){
  var day;

  switch (dayNum) {
    case 0:
      day="Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day="Tuesday";
      break;
    case 3:
      day = "Wednsday";
      break;
    case 4:
      day="Tursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day="Sanday";
      break;



  }

  return day;
}

document.write(getDayName(3)); */
/*
var person = {
  name: "Zeljko",
  age: 22,
  isMale: true,

}
document.write(person.name);

var myMovie = {
  title:"The Social Network",
  realeaseYear: "2010",
  duration:2.0,
  actors:[
    {
      name:" Jassie Eisenberg",
      birthday: new Date("October 5,1983"),
      hometown:"New York city"
    },
    {
      name:"Rooney Mara",
      birthday: new Date("April 17,1985"),
      hometown:"New York city"
    }
  ]
}

document.write(myMovie.actors[0].name);

var i = 1;

  while(i <= 10){

    document.write(i + "<br/>");
    i++;

  }; */

/*
var password = "wordpass";
var response;
var entryCount = 0;
var entryLimit = 3;
var error = false;

while (response != password && !error) {
  if (entryCount < entryLimit ) {
    response = window.prompt("Enter password")
  entryCount++;
} else {
  error = true;
}

}*//*
if (error) {
  alert("Too many entries");
}else {
alert("You got it");
}
var friends = ["Jim","Stanley","Kevin"];

for (var i = 0; i < friends.length; i++) {
  document.write(friends[i] + "<br/>");
  document.write(i + "<br/>");
};*/
/*
var questions = [
     {
           prompt: "What color are apples?\n(a) Red/Green\n\ (b) Purple\n(c) Orange",
           answer: "a"
     },
     {
          prompt: "What color are Bananas?\n(a) Teal\n\ (b) Magenta\n(c) Yellow",
          answer: "c"
     },
     {
          prompt: "What color are strawberries?\n(a) Yellow\n\ (b) Red\n(c) Blue",
          answer: "b"
     }
];
var score = 0;

for(var i = 0; i < questions.length; i++){
     var response = window.prompt(questions[i].prompt);
     if(response == questions[i].answer){
          score++;
          alert("Correct!");
     } else {
          alert("WRONG!");
     }
}
alert("you got " + score + "/" + questions.length);
*/
