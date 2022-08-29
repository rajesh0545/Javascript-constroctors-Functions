

function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    
  
    this.get = function(){
      return('my name is'+ ' ' + this.firstName);
    }
}
   Person.prototype.gender= 'male';

   console.log(Person.prototype);

  const person1 = new Person('rajesh','k', 21,);
  const person2 = new Person('mahesh', 'B', 24);
 
  console.log(person1.firstName);
  console.log(person2.firstName);
  console.log(person1.gender);
  console.log(person1.get('my name is'+ ''+ this.firstName));

