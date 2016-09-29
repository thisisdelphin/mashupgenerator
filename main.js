var actions = [
  {
    "Name": "Data Bending",
    "Description": "The process by which a digital format is manipulated with tools designed for other formats (e.g. images hacked in a text editor, images edited with audio precessors)."
  },
  {
    "Name": "Bot",
    "Description": "A software application that runs automated tasks over the internet. Typically, bots perform tasks that are both simple and structurally repetitive, at a much higher rate than would be possible for a human alone. Common use of bots range from web spidering (an automated program collect and analyses information from web servers), twitter usage (the program produce tweets based on textual reconfigurations), or Wikipedia editing."
  },
  {
    "Name": "MIDI",
    "Description": "MIDI is a technical standard (Musical Instrument Digital Interface) creating compositions with a very large numbers of notes only machines could play. We try to produce MIDI files with other formats."
  },
  {
    "Name": "Frankenstein Mashup",
    "Description": "The Frankenstein Mashup is to just take elements of past, present and future and just collide them together, in sort of collage. More or less semi-randmomly, like a Surrealist exquisite corpse."
  },
  {
    "Name": "Machine Humor",
    "Description": "A style of humor based on machine-like idions, machine-generated formulations and syntaxic mistakes"
  }
];
var services = [
  "Facebook",
  "Twitter",
  "Snapchat",
  "Wikipedia",
  "Google Maps",
  "Google Street View",
  "Instagram",
  "YouTube",
  "Google Translate",
  "Google Images",
  "Deep Dreams"
];
var tonalites = [
  "comique",
  "ironique",
  "tragique",
  "pathétique",
  "lyrique",
  "oratoire",
  "didactique",
  "polémique"
];
var medium = [
  "image",
  "son",
  "vidéo",
  "texte",
  "gif"
];

function generateAction(){
  var div = document.getElementById("generatedAction");
  var descriptionAction = document.getElementById("descriptionAction");
  var random = Math.floor(Math.random() * actions.length);
  div.innerHTML =
  actions[random].Name;
  descriptionAction.innerHTML =
  actions[random].Description;
}

function generateServices(){
  var div = document.getElementById("generatedServices");
  x = document.getElementById("generatedAction");

  if ( x.innerHTML === "Frankenstein Mashup" ){
    div.innerHTML =
    ' : ' +
    services[Math.floor(Math.random() * services.length)];
  } else {
    div.innerHTML =
    's : ' +
    services[Math.floor(Math.random() * services.length)] +
    ' et ' +
    services[Math.floor(Math.random() * services.length)];
  }
}

function generateTonalite(){
  var div = document.getElementById("generatedTonalite");
  div.innerHTML =
  tonalites[Math.floor(Math.random() * tonalites.length)];
}

function generateMedium(){
  var div = document.getElementById("generatedMedium");
  x = document.getElementById("generatedAction");

  if ( x.innerHTML === "MIDI" ){
    div.innerHTML =
    'son';
  } else {
    div.innerHTML =
    medium[Math.floor(Math.random() * medium.length)];
  }
}

document.getElementById('button').onclick = function() {
  generateAction();
  generateServices();
  generateTonalite();
  generateMedium();
  document.getElementById("generation").style.visibility = "visible";

};
