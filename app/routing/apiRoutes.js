// Import the list of friend entries
var friendsList = require("../data/friends.js");

// Export API routes
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsList);
  });

  // Add new friend entry
  app.post("/api/friends", function(req, res) {
    var userInput = req.body;
		var userResponse = userInput.scores;
		
		var userMatch = "";
		var friendMatch = "";
		
    for (var i = 0; i < friendsList.length; i++) {
			var scoreDif = 0;
			for (var j = 0; j < userResponse.length; j++) {
				scoreDif += Math.abs(friendsList[i].scores[i] - userResponse[i]);

				// console.log(friendsList[i])
				friendsList.push(userInput);
				res.json(friendsList[i]);
			}
		}
	});
};
	
		// diff += Math.abs(friendsList[i].scores[j] - userResponse[j]);
    // Add new user
