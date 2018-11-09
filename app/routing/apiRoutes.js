// // Import the list of friend entries
var friendsList = require("../data/friends");
var path = require("path");

// // Export API routes
module.exports = function(app) {
  app.get("api/friends", function(req, res) {
    res.json(friendsList);
  });

	//finds your friend
  app.post("/api/friends", function(req, res) {
    var userInput = req.body;
    var yourMatch = {
      name: "",
      photo: "",
      diff: 100
    };

    // runs loop through friends list
    for (var i = 0; i < friendsList.length; i++) {
      scoreTotal = 0;
			// runs loop through the friendslist scores
      for (var j = 0; j < friendsList[i].scores.length; j++) {
				// compare the users score to the friends score. Takes the absolute value from the difference.
        scoreTotal += Math.abs(friendsList[i].scores[j] - userInput.scores[j]);

				// condition to find our match and set the values
        if (scoreTotal <= yourMatch.diff) {
          (yourMatch.name = friendsList[i].name),
          (yourMatch.photo = friendsList[i].photo),
          (yourMatch.diff = scoreTotal);
        }
      }
    }
    friendsList.push(userInput);
    res.json(yourMatch);
    console.log(yourMatch);
  });
};
