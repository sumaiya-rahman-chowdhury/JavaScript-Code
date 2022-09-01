var person = new Object();
person.fname='Ram';
person.lname='Kumar';
person.age=25;
document.write(person.fname+" "+person.lname+" "+person.age +"<br>");
var student=[
		
		{name:'Ram',age:15},
		{name:'ARam',age:16},
		{name:'AbRam',age:117},
];
console.log(student);
for(var a=0;a < 3;a++)
{
	document.write(student[a].name + " " +student[a].age + "<br>");
}