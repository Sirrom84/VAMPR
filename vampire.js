class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  //works tests passed
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  //works passing tests
  get numberOfOffspring() {
    return this.offspring.length; //
  }

  //Returns the number of vampires away from the original vampire this vampire is
  //works test passed
  get numberOfVampiresFromOriginal() { //
    let numberOfVampires = 0;
    let currentVampire = this;
  
    // climb "up" the tree (using iteration), counting nodes, until no parent is found
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires++;
    }
    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  // Works tests passed
  isMoreSeniorThan(vampire) {
    let numberOfVampires = 0;
    let currentVampire = this;
    let paramVamp = 0;
    // climb "up" the tree (using iteration), counting nodes, until no parent is found
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires++;
    }
    // below is while loop to check paramater vampire against THIS Vampire
    while (vampire.creator) {
      vampire = vampire.creator;
      paramVamp++;
    }
    if (numberOfVampires < paramVamp) {
      return true; //if THIS vampire is more senior
    } else {
      return false; //if THIS vampire is less senior than the paramater
    }
  }
}
  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.

  //Start below
  // closestCommonAncestor(vampire) {

  // }


// const dracula = new Vampire('Dracula', 1500); //root
// const ansel = new Vampire("Ansel", 1550); //sib to bart child of drac
// const bart = new Vampire("Bart", 1552); // sib to ansel child of drac
// const elgort = new Vampire("Elgort", 1570); //sib to sarah child to ansel
// const sarah = new Vampire("Sarah", 1570); // sib to elgort child of Ansel
// const andrew = new Vampire("Andrew", 1552); //child of elgort

// dracula.addOffspring(ansel);
// dracula.addOffspring(bart);
// ansel.addOffspring(elgort);
// ansel.addOffspring(sarah);
// elgort.addOffspring(andrew);


// console.log(ansel.numberOfOffspring);











module.exports = Vampire;

