console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1
 


function makeMiddleEarth() {
// create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body

  var middleEarth = document.createElement("section");

  middleEarth.setAttribute("id", "middle-earth");

  for (var i=0;  i < lands.length; i++) {
  var newLands = document.createElement("article");
  var headerText = document.createElement("h1");
  headerText.innerText=lands[i]
  newLands.appendChild(headerText);
  middleEarth.appendChild(newLands);

  }

body.appendChild(middleEarth);

}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
var hobbitList = document.createElement("ul");
var theShire = document.getElementById("middle-earth").firstChild;
theShire.appendChild(hobbitList);
  // in context of hobbit array
for (var i = 0; i < hobbits.length; i++){

//need to add li to the ul
//add names to each list item 
//give each hobbit a class of hobbit
var item = document.createElement("li");
hobbitList.appendChild(item);
item.textContent += hobbits[i];
if (hobbits[i] =='Frodo Baggins'){
  item.setAttribute('id',"frodo");
}
item.setAttribute("class", "hobbit");
}
}
makeHobbits();

 // Part 3

 function keepItSecretKeepItSafe() {
                 
 // create a div with an id of 'the-ring'
// give the div a class of 'magic-imbued-jewelry'
 // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  //theRing.addEventListener("click", "nazgul-screech");
  // add the ring as a child of Frodo  

  var theRing = document.createElement("div");
    theRing.setAttribute("id", "the-ring");
    theRing.setAttribute("class", "magic-imbued-jewelry");
   theRing.addEventListener("click", nazgulScreech) ;
   //access hobbit list to get to Frodo
var frodo = document.getElementById("frodo");

   frodo.appendChild(theRing);
  
  


}   
 keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {

   // create an aside tag
  var aside = document.createElement ("aside");
   // attach an unordered list of the 'buddies' in the aside
  var buddyList = document.createElement ("ul");
  for (var i = 0; i < buddies.length; i++){

    var item = document.createElement("li");
    buddyList.appendChild(item);
    item.textContent += buddies[i];
}

  aside.appendChild(buddyList);
  var rivendell = document.getElementById("middle-earth").children[1];
  rivendell.appendChild(aside);

  
  // insert your aside as a child element of rivendell
}

makeBuddies();


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
var aside = document.getElementsByTagName("aside")[0];
friendList = aside.firstChild;
friends=friendList.children;
 for (var i = 0; i < friends.length; i++){
  if (friends[i].textContent == "Strider") {
    friends[i].textContent = "Aragorn";
  }
}
}

beautifulStranger();
// Part 6


function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell

var theShire = document.getElementById("middle-earth").firstChild;
var hobbitList = theShire.children[1];
var aside = document.getElementsByTagName("aside")[0];
aside.appendChild(hobbitList);


}
leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
