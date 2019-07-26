// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
      this.name = attributes.name,
      this.age = attributes.age;
      this.location = attributes.location;
    }
    // Method go here! 
      speak(){
      console.log(`Hello my name is ${this.name} and I am from ${this.location}.`);
    }
  }// Person

  class Instructor extends Person{
    constructor(instructorAttributes){
      super(instructorAttributes); 
      this.specialty = instructorAttributes.specialty;
      this.favLanguage = instructorAttributes.favLanguage; 
      this.catchPhrase= instructorAttributes.catchPhrase;
    }
    //write methods here!
    demo(subject){
      console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
      }
  }//Instructor
  
  class Student extends Person{
    constructor(studentAttributes){
      super(studentAttributes);
      this.previousBackground = studentAttributes.previousBackground; 
      this.className = studentAttributes.className; 
      this.favSubjects = studentAttributes.favSubjects;
    }
    //methods here
    listsSubjects(){
        console.log(`${this.favSubjects}`);
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
  }//Student

  class ProjectManagers extends Instructor{
    constructor(pmAttributes){
      super(pmAttributes); 
      this.gradClassName = pmAttributes.gradClassName; 
      this.favInstructor = pmAttributes.favInstructor; 
    }
    //methods here
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
  }//ProjectManagers


//PERSONS
  const kevin = new Person({
      name: 'Kevin',
      age: 40,
      location: 'Scraton'
  })

  const creed = new Person({
    name: 'Creed',
    age: 60,
    location: 'no where'
})


//INSTRUCTORS
const Michael = new Instructor({
    name: 'Michael Scott',
    age: 50,
    location: 'Dunder Mifflin',
    specialty: 'C++',
    favLanguage: 'Python',
    catchPhrase: 'thats what she said!'
})

const David = new Instructor({
    name: 'David Wallace',
    age: 52,
    location: 'New york',
    specialty: 'C#',
    favLanguage: 'JavaScript',
    catchPhrase: 'have michael call me please.'
})

//STUDENTS
const jim = new Student({
    name: 'Jim',
    age: 28,
    location: 'scraton',
    specialty: 'HTML',
    favLanguage: 'Pyton',
    catchPhrase: "Just gives you smirk",
    previousBackground: 'College basketball player',
    className: 'WEB22',
    favSubjects: ['CSS', 'React', 'JavaScript']
})

const pam = new Student({
    name: 'Pam',
    age: 27,
    location: 'scraton',
    specialty: 'UI/UX',
    favLanguage: 'CSS',
    catchPhrase: "I can design anything!",
    previousBackground: 'receptionist at Dunder Mifflin',
    className: 'WEB22',
    favSubjects: ['Html', 'UI', 'CSS']
})

//PMs
const Andy = new ProjectManagers({
    name: 'Andy',
    age: 38,
    location: 'Cornell',
    specialty: 'Java',
    favLanguage: 'CSS',
    catchPhrase: "I went to cornell!",
    previousBackground: 'acapella singer',
    className: 'WEB23',
    favSubjects: ['React', 'SQL', 'JavaScript'],
    gradClassName: 'WEB21',
    favInstructor: 'Michael'
})

const Dwight = new ProjectManagers({
    name: 'Dwight',
    age: 50,
    location: 'Schrute Farms',
    specialty: 'python',
    favLanguage: 'Javascript',
    catchPhrase: "Question?",
    previousBackground: 'Beat Farmer',
    className: 'WEB22',
    favSubjects: ['CSS', 'HTML', 'LESS'],
    gradClassName: 'WEB20',
    favInstructor: 'Michael'
})

kevin.speak();
creed.speak();

Michael.speak();
David.speak();
Michael.demo('CSS');
Michael.grade(jim, 'JavaScript');
David.demo('React');
David.grade(pam, 'CSS');

jim.speak();
pam.speak();
jim.listsSubjects();
pam.listsSubjects();
jim.PRAssignment('CSS');
pam.PRAssignment('HTML');
jim.sprintChallenge('SQL');
pam.sprintChallenge('CSS');

Andy.speak();
Dwight.speak();
Andy.demo('JavaScrtipt');
Dwight.grade(jim, 'CSS');
Andy.demo('HTML');
Dwight.grade(pam, 'C#');
Andy.standUp('Cornel grads');
Dwight.standUp('Schrute farms');
Andy.debugsCode(jim, 'HTML');
Dwight.debugsCode(pam, "CSS");