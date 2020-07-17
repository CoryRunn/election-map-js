var createPolitician = function(name, partyColor){ //This is a "Factory Function" which returns new objects. See variables for Kermit and Piggy below the "return".

    var politician = {};
    politician.name = name;
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = partyColor
    
    politician.tallyUpTotalVotes = function(){
      
      this.totalVotes = 0;
      
      for (var i = 0; i < this.electionResults.length; i++){
        this.totalVotes = this.totalVotes + this.electionResults[i];//Adds the votes starting from zero, then adds each array item until you reach end of arryas listed below.
      }
    };
    
    return politician;//Return needed for a factory function
  };
  
  var kermit = createPolitician("Kermit The Frog", [46,200,6]);//Assign name and partyColor to variable
  var piggy = createPolitician("Miss Piggy", [245,141,136]);//Assign name and partyColor to variable
  
  console.log("Kermit's color is: " + kermit.partyColor);//Test to see if factory function is working
  console.log("Piggy's color is: " + piggy.partyColor);
  
  kermit.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
  //Arrays for vote reults by state (in alphabetical order)
  piggy.electionResults =[4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];
  
  kermit.electionResults[9] = 1;//Replaces items in the array
  piggy.electionResults[9] = 28;//Replaces items in the array
  
  kermit.electionResults[4] = 17;//Replaces items in the array
  piggy.electionResults[4] = 38;//Replaces items in the array
  
  kermit.electionResults[43] = 11;//Replaces items in the array
  piggy.electionResults[43] = 27;//Replaces items in the array
  
  var setStateResults = function(state){//Setting winner of each state
    
    theStates[state].winner = null;//theState[state] is from the third party JS code, map.JS
    
    if (kermit.electionResults[state] > piggy.electionResults[state]) {
      theStates[state].winner = kermit;
    }
    else if (piggy.electionResults[state] > kermit.electionResults[state]) {
      theStates[state].winner = piggy;
    }
    
    var stateWinner = theStates[state].winner;
    
    if (stateWinner !== null){//Sets backround color to winner's color, if a draw sets it to blue.
      theStates[state].rgbColor = stateWinner.partyColor;
    } else {
      theStates[state].rgbColor = [11,32,57];
    }
    
    var stateInfoTable = document.getElementById('stateResults');//Accessing the DOM to set variables for the two results tables in the HTML.
    var header = stateInfoTable.children[0];
    var body = stateInfoTable.children[1];
    var stateName = header.children[0].children[0];//"children" are used to access the HTML table elements
    var abbrev = header.children[0].children[1];
    var name1 = body.children[0].children[0];
    var name2 = body.children[1].children[0];
    var results1 = body.children[0].children[1];
    var results2 = body.children[1].children[1];
    var winnersName = body.children[2].children[1];
   
    stateName.innerText = theStates[state].nameFull;//Sets the State's name
    abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";//Sets the state abbreviation
    
    name1.innerText = kermit.name;//Sets the canidate name in the lower right hand table
    name2.innerText = piggy.name;
    
    results1.innerText = kermit.electionResults[state];//Sets the state results in lower table.
    results2.innerText = piggy.electionResults[state];
    
    if (theStates[state].winner ===null){//Sets "DRAW" or winner on each state in table.
      winnersName.innerText = "DRAW";
    } else {
      winnersName.innerText = theStates[state].winner.name;
    }
  }
  
  kermit.tallyUpTotalVotes();//Adds up total of all votes
  piggy.tallyUpTotalVotes();
  
  console.log(kermit.totalVotes);//Logs total votes in console
  console.log(piggy.totalVotes);
  
  var winner = "???";
  
  if (kermit.totalVotes > piggy.totalVotes){//Declaring winner
    winner = kermit.name;
  }
    else if (kermit.totalVotes < piggy.totalVotes){
    winner = piggy.name;
    }
    else{
      winner = "DRAW."
    }
  
  console.log("AND THE WINNER IS..." + winner + "!!!");//Log to affirm var winner
  
  var countryInfoTable = document.getElementById('countryResults');//DOM access to top table (country total)
  var row = countryInfoTable.children[0].children[0];
  
  row.children[0].innerText = kermit.name;//Assiging properties to the top table
  row.children[1].innerText = kermit.totalVotes;
  row.children[2].innerText = piggy.name;
  row.children[3].innerText = piggy.totalVotes;
  row.children[5].innerText = winner;
  