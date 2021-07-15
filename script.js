/* Given the 'id' attribute of a form element, this
   will return the value entered by the user into
   that form element. */
function formValue(id) {
  // Get the form element.
  let formElement = document.getElementById(id);
  
  // When the form element isn't found, return
  // a string that signifies that.
  if (formElement === null) {
    return `[${id} NOT FOUND]`;
  }

  let value = formElement.value;

  // When the value is empty, return a string
  // with the placeholder text.
  if (formElement.value.trim() === "") {
    return `[${formElement.placeholder}]`;
  }

  return document.getElementById(id).value;
}

/* Given the 'id' of an HTML element and a 
   'className', this will add that class to
   the HTML element. */
function addClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.add(className);
}

/* The code here will be executed each time
   that the form button is clicked. */
function generate() {
  // Receive the form values 
  let relative = formValue('relative');
  let adjective1 = formValue('adjective-1');
  let adjective2 = formValue('adjective-2');
  let favoriteFood = formValue('favorite-food');
  let professor = formValue('professor');
  let crush = formValue('crush');
  let noun = formValue('noun');
  let dessert = formValue('dessert');
  let petName = formValue('pet-name');

  // Insert form values into madlib 
  let madLib = `
    Dear ${relative},
    <br><br>
    College has been a huge adjustment. First week of class was ${adjective1} to say the least. I got ${professor}, the same guy you had. I've never hated math more. I met this girl, ${crush}, she's on the soccer team so I go to all the games. I met her in ${noun}. I know right, I'm actually getting involved on campus. Figured I might as well make the most of my experience. Honestly, this place is just as ${adjective2} as everyone says it is. It's starting to grow on me though. Hope I'm making you proud, we'll have to go out for ${favoriteFood} next time I'm back home. See you soon.
    <br><br>
    Love Yours ${dessert},
    <br>
    ${petName}
  `;

  // Output madlib to player
  document.getElementById('output').innerHTML = madLib;
  addClassToElement('container', 'generated');

}