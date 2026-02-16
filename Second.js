const recordResults = function() {
    let team1 = prompt("Enter the name of the first team:");
    let score1 = parseInt(prompt("Enter " + team1 + "'s score:"));
    
    let team2 = prompt("Enter the name of the second team:");
    let score2 = parseInt(prompt("Enter " + team2 + "'s score:"));

    let resultMessage = "";

    if (score1 > score2) {
        resultMessage = team1 + " won " + score1 + " to " + score2;
    } else if (score2 > score1) {
        resultMessage = team2 + " won " + score2 + " to " + score1;
    } else {
        resultMessage = "It's a tie! " + score1 + " to " + score2;
    }
  
    // Code that adds a new paragraph with a string to the "div" in the HTML file 
    const divId = document.getElementById("results");
    const newPara = document.createElement("p");
    newPara.textContent = resultMessage;
    divId.appendChild(newPara);
}
