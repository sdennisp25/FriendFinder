// Import the list of friend entries
var friendsList = require("../data/friends.js");

// Export API routes
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    // res.json(friendsList);
  });

  // Add new friend entry
  app.post("/api/friends", function(req, res) {
    var userInput = req.body;
    var userResponse = userInput.scores;
		
    for (var i = 0; i < friendsList.length; i++) {
			// console.log(friendsList[i])
			// res.json(friendsList[i]);
		}
	});
};
	
	// for (var j = 0; j < userResponse.length; j++) {
		// diff += Math.abs(friendsList[i].scores[j] - userResponse[j]);
    // Add new user
    // friendsList.push(userInput);
