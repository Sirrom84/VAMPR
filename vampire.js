class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;

  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let count = 0;
    let current = this;
    while (current.creator) {
      current = current.creator;
      count++;
    }
    return count;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) ? true : false;
  }

  /** Stretch **/

  // closestCommonAncestor(vampire) {
 
  //   }
  // }


  // Returns the vampire object with that name, or null if no vampire exists with that name

  vampireWithName(name) {
    if (name === this.name) {
      return this;
    }
    if (this.offspring) {
      for (let vamp of this.offspring) {
        let search = vamp.vampireWithName(name);
        if (search) {
          return search;
        }
      }
    }
    return null;
  }


  // Returns the total number of vampires that exist
  get totalDescendents() {
    let cur = this;
    let count = cur.offspring.length;
    if (cur.offspring) {
      for (const child of cur.offspring) {
        cur = child;
        count += child.totalDescendents;
      }
    }
    return count;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {

    let vampires = [];
    if (this.yearConverted > 1980) vampires.push(this);
    for (const offspring of this.offspring) {
      const millenials = offspring.allMillennialVampires;
      vampires = vampires.concat(millenials);
    }
    return vampires;
  }
}

module.exports = Vampire;


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













module.exports = Vampire;

