//Base Class
class Instrument  {
    constructor(loudness, family, playVerb) {
        this.loudness = loudness;
        this.family = family;
        this.playVerb = playVerb;
    }
    play() {
        return console.log ("My " + this.family + " instrument " + this.playVerb + " at " + this.loudness + " decibels.");
    }
}

//Child Class/Concrete Classes
class Woodwind extends Instrument {
    constructor(family, playVerb, loudness) {
        super(loudness) ;
        this.family = "woodwind";
        this.playVerb = "toots"
    }
}

class Percussion extends Instrument {
    constructor(family, playVerb, loudness) {
        super(loudness) ;
        this.family = "percussion";
        this.playVerb = "beats";
    }
   
}

class String extends Instrument {
    constructor(family, playVerb, loudness) {
        super(loudness) ;
        this.family = "stringed";
        this.playVerb = "strums";
    }
}

//Make at least one instance of each of your child classes, and put them into an array. 
myFlute = new Woodwind(this.family, this.playVerb, "443");
myGuitar = new String(this.family, this.playVerb, "595");
myPercussion = new Percussion(this.family, this.playVerb, "980");


let instruments = [myFlute.play(), myGuitar.play(), myPercussion.play()];

//Loop through that array and call the play method of each of them - you should see the full message for each in your console.
instruments.forEach(this.play);

