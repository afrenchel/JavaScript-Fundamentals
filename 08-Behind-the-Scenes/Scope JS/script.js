'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  console.log(firstName); //JS did a variable lookup and find the variable in the global scope "firstName"

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //   const firstName="Steven";//it will use Steven beacuse it is in the current scope

      //Reassigning outer scope's variable
      output = 'New Output';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    // //console.log(str); will not work available only in the block in which was created(const,let)
    // console.log(millenial); // var can be found outside the block
    // add(2, 3);//not avialable out of the scope-if we remove strict mode it will work
  }

  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
