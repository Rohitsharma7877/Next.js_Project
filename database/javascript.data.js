const javaScripttopics = [
  {
    heading: "JavaScript Loops",
    content: `Loops are handy, if you want to run the same code over and over again, each time with a different value.

        Often this is the case when working with arrays: `,

    video: "https://www.youtube.com/embed/EI7sN1dDwcY",
    code: `
        let i = 5;

        for (let i = 0; i < 10; i++) {
          // some code
        }
        
        // Here i is 5
      `,
  },

  {
    heading: `JavaScript While Loop`,
    content: `The while loop loops through a block of code as long as a specified condition is true.`,
    video: `https://www.youtube.com/embed/osOEz3SwyVk`,
    code: `while (i < 10) {
            text += "The number is " + i;
            i++;
          }
          `,
  },
  {
    heading: `JavaScript Arrow Function`,
    content: `It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:`,
    video: `https://www.youtube.com/embed/RwlL5pXPhfs`,
    code: `

            //normal function
            hello = () => {
                return "Hello World!";
              }
            
            //arrow functions 
            hello = () => "Hello World!";


            hello = (val) => "Hello " + val;
        
            hello = () => {
                document.getElementById("demo").innerHTML += this;
              }
              
              // The window object calls the function:
              window.addEventListener("load", hello);
              
              // A button object calls the function:
              document.getElementById("btn").addEventListener("click", hello);
        
        `,
  },
  {
    heading: `JavaScript Object Methods`,
    content: ` In JavaScript, the this keyword refers to an object.

            Which object depends on how this is being invoked (used or called).
            
            The this keyword refers to different objects depending on how it is used`,
    video: `https://www.youtube.com/embed/AmdUDQARn7g`,
    code: `const person = {
            firstName: "John",
            lastName: "Doe",
            id: 5566,
            fullName: function() {
              return this.firstName + " " + this.lastName;
            }
          };`,
  },
  {
    heading: `JavaScript Object Constructors`,
    content: `In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.`,
    video: `https://www.youtube.com/embed/3pMUsoVkufA`,
    code: `function Person(first, last, age, eye) {
            this.firstName = first;
            this.lastName = last;
            this.age = age;
            this.eyeColor = eye;
          }`,
  },
  {
    heading: `Object prototypes`,
    content: `Prototypes are the mechanism by which JavaScript objects inherit features from one another. In this article, we explain what a prototype is, how prototype chains work, and how a prototype for an object can be set.`,
    video: `https://www.youtube.com/embed/kCb8HVgMzMo`,
    code: `function Person(first, last, age, eyecolor) {
            this.firstName = first;
            this.lastName = last;
            this.age = age;
            this.eyeColor = eyecolor;
          }
          
          const myFather = new Person("John", "Doe", 50, "blue");
          const myMother = new Person("Sally", "Rally", 48, "green");`,
  },
  {
    heading: `JavaScript Function call`,
    content: `The call() method is a predefined JavaScript method.

            It can be used to invoke (call) a method with an owner object as an argument (parameter).`,
    video: `https://www.youtube.com/embed/NBIHn-9HjO4`,
    code: `const person = {
            fullName: function() {
              return this.firstName + " " + this.lastName;
            }
          }
          const person1 = {
            firstName:"John",
            lastName: "Doe"
          }
          const person2 = {
            firstName:"Mary",
            lastName: "Doe"
          }
          
          // This will return "John Doe":
          person.fullName.call(person1);`,
  },
  {
    heading: `JavaScript Function apply`,
    content: `In JavaScript strict mode, if the first argument of the apply() method is not an object, it becomes the owner (object) of the invoked function. In "non-strict" mode, it becomes the global object.

    `,
    video: `https://www.youtube.com/embed/lQtDH0kW6II`,
    code: `const person = {
            fullName: function() {
              return this.firstName + " " + this.lastName;
            }
          }
          
          const person1 = {
            firstName: "Mary",
            lastName: "Doe"
          }
          
          // This will return "Mary Doe":
          person.fullName.apply(person1);`,
  },
  {
    heading: `JavaScript Function bind`,
    content: `With the bind() method, an object can borrow a method from another object.

            The example below creates 2 objects (person and member).
            
            The member object borrows the fullname method from the person object:`,
    video: `https://www.youtube.com/embed/g2WcckBB_q0`,
    code: `const person = {
            firstName:"John",
            lastName: "Doe",
            fullName: function () {
              return this.firstName + " " + this.lastName;
            }
          }
          
          const member = {
            firstName:"Hege",
            lastName: "Nilsen",
          }
          
          let fullName = person.fullName.bind(member);`,
  },
  {
    heading: `JavaScript Closures`,
    content: `In the last example, a is a global variable.

            In a web page, global variables belong to the page.
            
            Global variables can be used (and changed) by all other scripts in the page.
            
            In the first example, a is a local variable.
            
            A local variable can only be used inside the function where it is defined. It is hidden from other functions and other scripting code.
            
            Global and local variables with the same name are different variables. Modifying one, does not modify the other.`,
    video: `https://www.youtube.com/embed/3a0I8ICR1Vg`,
    code: `let a = 4;
            function myFunction() {
              return a * a;
            }`,
  },
  {
    heading: `Class Inheritance`,
    content: `The super() method refers to the parent class.

            By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.`,
    video: `https://www.youtube.com/embed/xNFRHv8LXlg`,
    code: `class Car {
            constructor(brand) {
              this.carname = brand;
            }
            present() {
              return 'I have a ' + this.carname;
            }
          }
          
          class Model extends Car {
            constructor(brand, mod) {
              super(brand);
              this.model = mod;
            }
            show() {
              return this.present() + ', it is a ' + this.model;
            }
          }
          
          let myCar = new Model("Ford", "Mustang");
          document.getElementById("demo").innerHTML = myCar.show();`,
  },

  {
    heading: `JavaScript Callbacks`,
    content: `A callback is a function passed as an argument to another function

            This technique allows a function to call another function
            
            A callback function can run after another function has finished`,
    video: `https://www.youtube.com/embed/kz_vwAF4NHI`,
    code: `function myFirst() {
            myDisplayer("Hello");
          }
          
          function mySecond() {
            myDisplayer("Goodbye");
          }
          
          myFirst();
          mySecond();`,
  },
  {
    heading: `JavaScript Promises`,
    content: `A JavaScript Promise object contains both the producing code and calls to the consuming code:`,
    video: `https://www.youtube.com/embed/DHvZLI7Db8E`,
    code: `let myPromise = new Promise(function(myResolve, myReject) {
            // "Producing Code" (May take some time)
            
              myResolve(); // when successful
              myReject();  // when error
            });
            
            // "Consuming Code" (Must wait for a fulfilled Promise)
            myPromise.then(
              function(value) { /* code if successful */ },
              function(error) { /* code if some error */ }
            );`,
  },
  {
    heading: `JavaScript Async`,
    content: `The keyword async before a function makes the function return a promise:`,
    video: `https://www.youtube.com/embed/V_Kr9OSfDeU`,
    code: `

//example1

function myFunction() {
    return Promise.resolve("Hello");
  }

//example2
            myFunction().then(
                function(value) { /* code if successful */ },
                function(error) { /* code if some error */ }
              );
        `,
  },
];

export default javaScripttopics;
