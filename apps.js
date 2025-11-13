document.getElementById("start-button").addEventListener("click", function() {
      // Ask user for name 
      let name = prompt("Enter a person's name:");
      // Ask user for adjective
      let adjective1 = prompt("Enter an adjective:");
      // Ask user for household appliance
      let appliance = prompt("Enter a household appliance:");
      // Ask user for verb ending in -ing
      let verb1 = prompt("Enter a verb ending in -ing:");
      // Ask user for random object
      let noun1 = prompt("Enter a random object:");
      // Ask user for animal
      let animal = prompt("Enter an animal:");
      // Ask user for adjective
      let adjective2 = prompt("Enter another adjective:");
      // Ask user for place
      let place = prompt("Enter a random place:");
      // Ask user for celebrity
      let celebrity = prompt("Enter the name of a celebrity:");
      // Ask user for noise
      let sound = prompt("Enter a weird noise:");
      // Ask user for name pasttense verb
      let verb2 = prompt("Enter a past-tense verb:");
      // Ask user for number
      let number = prompt("Enter a number:");
      // Ask user for food
      let food = prompt("Enter a food:");
      // Ask user for something you would yell
      let exclamation = prompt("Enter something you'd yell:");

      // Build the story
      let story = `
        <h1> The Haunted ${appliance} </h1>
        <p>
          It was a dark and ${adjective1} Halloween night when ${name} heard the 
          ${appliance} start ${verb1} all by itself. 
          A chill ran down their spine as a ${noun1} rolled slowly across the floor. 
          From the shadows, a ${animal} with glowing eyes appeared — its stare was ${adjective2} and unblinking.  
          Desperate to escape, ${name} ran toward ${place}, but the fog grew thicker with every step. 
          Suddenly, ${celebrity} appeared out of nowhere, whispering "${sound}" in a voice that didn’t sound human. 
          ${name} ${verb2} in terror, clutching a piece of ${food} for protection. 
          The air grew colder, and for ${number} seconds, time itself seemed to stop. 
          Then, with a flash of lightning, the ${appliance} turned on again. 
          The room filled with whispers, and ${name} screamed, "${exclamation}!" 
          When the lights flickered back on, ${name} was gone. 
          Only the ${noun1} remained, dripping with something dark...
        </p>
      `;

      // Display story
      document.getElementById("madlib-output").innerHTML = story;
    });