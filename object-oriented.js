// people used to treat functions like classes

class Instructor {
    constructor({ name }) {
      this.name = name;
    }
  }
  
  const jon = new Instructor({ name : 'Jon Snow' });
  
  console.log(jon);

/*
> class Instructor {
...   constructor({ name }) {
.....     this.name = name;
.....   }
... }
undefined
> const jon = new Instructor({ name : 'Jon Snow' });
undefined
> jon;
Instructor { name: 'Jon Snow' }
> jon.name;
'Jon Snow'
*/

class Instructor {
    constructor({ name, role = 'assistant' }) {
      this.name = name;
      this.role = role;
    }
  //   instance method, can be called on a specific instance
    renderDetails() {
      console.log(`${this.name}: ${this.role}`);
    }
  // static method - when the method (function inside class, ), does not require to use data for instantiation
  //   IMPORTANT if you want to use Ask yourself . Does this methd REALLY need to be iside of a class? --single responsibility principle : a class should only have one behavior
    static helloWorld() {
      console.log('Hi there')
    }
  //   a practticall example
    static canTeach(instructor) {
      return (instructor.role ===  'classroom'); //this will return true or false
    }
  }
  
  const jon = new Instructor({ 'name' : 'Jon Snow' });
  const brayden = new Instructor({ 'name' : 'Brayden', 'role': 'teacher' });
  let alice = new Instructor({ 'name' : 'Alice', 'role': 'classroom' });
  jon.renderDetails(); //"Jon Snow: assistant"
  brayden.renderDetails();// "Brayden: teacher"
  
  // a static method does not require an instance, to work, actually if you add an isntance it wond even work
  // 
  Instructor.helloWorld();//"Hi there"
  console.log(`${jon.name} can teach: ${Instructor.canTeach(jon)}`); // "Jon Snow can teach: false"
  // we are not calling on the alice object we are using our helper method canTeach , , the alice method already existed we are just passing it though
  console.log(`${alice.name} can teach: ${Instructor.canTeach(alice)}`); // "Alice can teach: true"
  