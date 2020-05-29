/*
  Full Name:Chengbin Huang
  Student ID:200405662

  Instructions:
    Follow the steps below. If you have any questions
    please feel free to use Slack to communicate. You
    are allowed to discuss the lab with other students
    but you ARE NOT permitted to copy/paste or share
    code.
  
  Rubric:
    Steps: 11.5 points
    Code Format: 10 points
    Github Link: 10 points

  NOTE: The code format and Github link marks are
    only awarded if the steps have been completed.
    (Code formatting is the visual structure of
      you code. I expect that you have used proper
      tabbing of nested structures so code readability
      is adequate.)
*/

/*
  Step 1 (2.5 points):
    Create an array that contains 4 people objects.
    Each object must have at least 2 properties.
*/
const people = [{name:"Ben", age:26}, 
                {name:"Marry", age:18},
                {name:"Ken", age:32},
                {name:"John", age:44}];


/*
  Step 2 (6 points):
    Create an arrow function that accepts
    a destructured object as an argument. In the
    body of your function, console.log a string
    template utilizing the properties you
    destructured.
*/

const {name, age} = people[2];
const showID =(name, age) => {
    console.log("Your name is " + name + ", and your age is " + age);
}
showID(name, age);

/*
  Step 3 (3 points):
    Loop over your array using a for/of loop.
    Call your arrow function passing the array item
    as an argument.
*/

for(let person of people){
    const greeting = person => console.log(person); 
    greeting(person);
}
