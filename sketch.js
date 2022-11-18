var ballot;
var votesSubmitted;
var votesTotal;

var animate;
var animateFrame;
var alph;

var centerWidth;
var centerHeight;

var inp;
var button;

var pieColors = {
  teal : "#399d8f", 
  orange : "#EC970B",
  yellow : "#FFCD4C",
  red : "#A10018",
  white : "#FFFFFF"
};

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  centerWidth = windowWidth/2;
  centerHeight = windowHeight/2;
  
  inp = createInput('');
  inp.position(centerWidth-5, 69);
  inp.size(80,25);
  inp.style('border-color', pieColors.orange);
  
  button = createButton('GO');
  button.position(centerWidth+90, 69);
  button.size(40,31);
  button.style('background', pieColors.red);
  button.style('color', pieColors.white);
  button.style('font-weight', "bold");
  button.style('font-size', "15px");
  button.style('font', "Tahoma");
  button.style('border-color', pieColors.white);
  button.mouseClicked(calcVotes);
  
  votesSubmitted = false;
  votesTotal = 0;
  
  ballot = {
    "Decrees": [{
      "name": "Blah, Blah, Blah",
      "percent": 0
    }, {
      "name": "Reverse The Road",
      "percent": 0
    }, {
      "name": "Chuck Corn",
      "percent": 0
    }],
    "Wills": [{
      "name": "Infuse",
      "percent": 20
    }, {
      "name": "Exchange",
      "percent": 0
    }, {
      "name": "Trust",
      "percent": 0
    }, {
      "name": "Swap",
      "percent": 20
    }, {
      "name": "Move",
      "percent": 0
    }, {
      "name": "Plunge",
      "percent": 0
    }],
    "Blessings": [{
      "name": "Rub the Stack",
      "percent": 10
    }, {
      "name": "Required Denny's",
      "percent": 0
    }, {
      "name": "Snowball Lobber",
      "percent": 5
    }, {
      "name": "Gust of Wind",
      "percent": 0
    }, {
      "name": "Grab Bag",
      "percent": 0
    }, {
      "name": "Sweep the Room",
      "percent": 5
    }, {
      "name": "Bunker",
      "percent": 15
    }, {
      "name": "Fried Chimes",
      "percent": 0
    }, {
      "name": "Admiration",
      "percent": 0
    }, {
      "name": "Growing Pains",
      "percent": 15
    }, {
      "name": "Wait for it",
      "percent": 0
    }, {
      "name": "Concert Hall",
      "percent": 0
    }, {
      "name": "Lord of the Flyballs",
      "percent": 10
    }]
  };
  
  
}

function draw() {
  background(pieColors.yellow);
  
  centerWidth = windowWidth/2;
  centerHeight = windowHeight/2;
  
  fill(pieColors.orange);
  stroke(pieColors.orange);
  strokeWeight(4);
  rect(20,20,windowWidth-40,windowHeight-40);
  fill(pieColors.teal);
  stroke(pieColors.teal);
  strokeWeight(3);
  rect(26,26,windowWidth-52,windowHeight-52);
  
  stroke(pieColors.yellow);
  strokeWeight(2);
  var movement = frameCount/30;
  for(var i = 25; i < windowWidth-25; i++) {
    if(sin((i/15) + movement) > 0.998) {
      line(i,25,i,windowHeight-25);
    }
  }
  
  fill(pieColors.yellow);
  stroke(pieColors.orange);
  strokeWeight(5);
  rect(centerWidth-150,50,300,70);

  fill(pieColors.red);
  textSize(35);
  stroke(pieColors.white);
  strokeWeight(6);
  //noStroke();
  textFont("Tahoma");
  textStyle(BOLD);
  textAlign(CENTER);
  text('Votes:', centerWidth-70, 95);
  
  if(votesSubmitted) {
    var numOfSections = Object.keys(ballot).length;
    var distBetween = 20;
    var sectionWidth = 400;
    var sectionHeight = windowHeight - 275;
    
    var displacement = sectionWidth + distBetween;
    for( var i = 0; i < numOfSections; i++ ) {
      var sectSpot = displacement 
      fill(pieColors.yellow);
      stroke(pieColors.orange);
      strokeWeight(5);
      rect(centerWidth-(sectionWidth/2)-((numOfSections-1)*0.5*displacement)+(i*displacement),180,sectionWidth,sectionHeight);
      
      fill(pieColors.white);
      stroke(pieColors.orange);
      strokeWeight(3);
      rect(centerWidth-(sectionWidth/2)-((numOfSections-1)*0.5*displacement)+(i*displacement)+15,195,sectionWidth-30,50);

      fill(pieColors.red);
      stroke(pieColors.white);
      strokeWeight(6);
      textAlign(CENTER);
      textStyle(BOLD);
      textSize(30);
      text(Object.keys(ballot)[i], centerWidth-(sectionWidth/2)-((numOfSections-1)*0.5*displacement)+(i*displacement)+(sectionWidth/2), 230);
      
      //noStroke();
      //fill(pieColors.teal);
      //rect(centerWidth-(sectionWidth/2)-((numOfSections-1)*0.5*displacement)+(i*displacement)+13,250,sectionWidth-26,24);
      
      fill(pieColors.red);
      textSize(18);
      stroke(pieColors.white);
      strokeWeight(4);
      textStyle(BOLD);
      textAlign(LEFT);
      text( "Name", centerWidth-(sectionWidth/2)-((numOfSections-1)*0.5*displacement)+(i*displacement) + 20, 268 );
      textAlign(RIGHT);
      text( "%", centerWidth-(sectionWidth/2)-((numOfSections-1)*0.5*displacement)+(i*displacement) + (sectionWidth/2) + 50, 268 );
      textAlign(RIGHT);
      text( "Votes", centerWidth-(sectionWidth/2)-((numOfSections-1)*0.5*displacement)+(i*displacement) + (sectionWidth-20), 268 );
      
      for( var a = 276; a < sectionHeight + 150; a += 48 ) {
        if( Math.round(a/2) == (a/2) ) {
          fill("#FFD86E");
          noStroke();
          rect(centerWidth-(sectionWidth/2)-((numOfSections-1)*0.5*displacement)+(i*displacement)+13,a,sectionWidth-26,24);
          fill(pieColors.red);
        }
      }
      for( var a = 0; a < ballot[Object.keys(ballot)[i]].length; a++ ) {
        var percent = ballot[Object.keys(ballot)[i]][a].percent;
        textStyle(NORMAL);
        if( percent > 0 ) {
          textStyle(BOLD);
        }
        textAlign(LEFT);
        text( ballot[Object.keys(ballot)[i]][a].name, centerWidth-(sectionWidth/2)-((numOfSections-1)*0.5*displacement)+(i*displacement) + 20, 295 + (24*a) );
        textAlign(RIGHT);
        text( ballot[Object.keys(ballot)[i]][a].percent, centerWidth-(sectionWidth/2)-((numOfSections-1)*0.5*displacement)+(i*displacement) + (sectionWidth/2) + 50, 295 + (24*a) );
        textAlign(RIGHT);
        text( Math.round(votesTotal*(ballot[Object.keys(ballot)[i]][a].percent/100)), centerWidth-(sectionWidth/2)-((numOfSections-1)*0.5*displacement)+(i*displacement) + (sectionWidth-20), 295 + (24*a) );
      }
    } 
  } else {
    textAlign(CENTER);
    strokeWeight(5);
    textSize(30 + (1 * cos(frameCount/31)));
    text( "Loading up the money canon...", centerWidth, centerHeight + (15*sin(frameCount/40)) );
  }
}

function calcVotes() {
  votesTotal = inp.value();
  if( votesTotal == null || votesTotal == 0 ) {
    votesSubmitted = false;
    console.log( "Not submitted. Vote Total: " + votesTotal );
  } else {
    votesSubmitted = true;
    console.log( "Submitted. Vote Total: " + votesTotal );
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  inp.position(centerWidth-5, 70);
  button.position(centerWidth+90, 70);
}