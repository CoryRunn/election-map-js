var createPolitician = function(name, partyColor){

    var politician = {};
    politician.name = name;
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = partyColor
    
    politician.tallyUpTotalVotes = function(){
      
      this.totalVotes = 0;
      
      for (var i = 0; i < this.electionResults.length; i++){
        this.totalVotes = this.totalVotes + this.electionResults[i];
      }
    };
    
    return politician;
  };
  
  var kermit = createPolitician("Kermit The Frog", [46,200,6]);
  var piggy = createPolitician("Miss Piggy", [245,141,136]);
  
  console.log("Kermit's color is: " + kermit.partyColor);
  console.log("Piggy's color is: " + piggy.partyColor);
  
  kermit.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
  
  piggy.electionResults =[4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];
  
  kermit.electionResults[9] = 1;
  piggy.electionResults[9] = 28;
  
  kermit.electionResults[4] = 17;
  piggy.electionResults[4] = 38;
  
  kermit.electionResults[43] = 11;
  piggy.electionResults[43] = 27;
  
  var setStateResults = function(state){
    
    theStates[state].winner = null;
    
    if (kermit.electionResults[state] > piggy.electionResults[state]) {
      theStates[state].winner = kermit;
    }
    else if (piggy.electionResults[state] > kermit.electionResults[state]) {
      theStates[state].winner = piggy;
    }
    
    var stateWinner = theStates[state].winner;
    
    if (stateWinner !== null){
      theStates[state].rgbColor = stateWinner.partyColor;
    } else {
      theStates[state].rgbColor = [11,32,57];
    }
    
    var stateInfoTable = document.getElementById('stateResults');
    var header = stateInfoTable.children[0];
    var body = stateInfoTable.children[1];
    var stateName = header.children[0].children[0];
    var abbrev = header.children[0].children[1];
    var name1 = body.children[0].children[0];
    var name2 = body.children[1].children[0];
    var results1 = body.children[0].children[1];
    var results2 = body.children[1].children[1];
    var winnersName = body.children[2].children[1];
   
    stateName.innerText = theStates[state].nameFull;
    abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";
    
    name1.innerText = kermit.name;
    name2.innerText = piggy.name;
    
    results1.innerText = kermit.electionResults[state];
    results2.innerText = piggy.electionResults[state];
    
    if (theStates[state].winner ===null){
      winnersName.innerText = "DRAW";
    } else {
      winnersName.innerText = theStates[state].winner.name;
    }
  }
  
  kermit.tallyUpTotalVotes();
  piggy.tallyUpTotalVotes();
  
  console.log(kermit.totalVotes);
  console.log(piggy.totalVotes);
  
  var winner = "???";
  
  if (kermit.totalVotes > piggy.totalVotes){
    winner = kermit.name;
  }
    else if (kermit.totalVotes < piggy.totalVotes){
    winner = piggy.name;
    }
    else{
      winner = "DRAW."
    }
  
  console.log("AND THE WINNER IS..." + winner + "!!!");
  
  var countryInfoTable = document.getElementById('countryResults');
  var row = countryInfoTable.children[0].children[0];
  
  row.children[0].innerText = kermit.name;
  row.children[1].innerText = kermit.totalVotes;
  row.children[2].innerText = piggy.name;
  row.children[3].innerText = piggy.totalVotes;
  row.children[5].innerText = winner;
  