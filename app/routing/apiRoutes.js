// Import the list of friend entries
var friends = require('../data/friends.js');

// Export API routes
module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	// Add new friend entry
	app.post('/api/friends', function(req, res) {
		var userInput = req.body;
		var userResponse = userInput.scores;
		var matchName = '';
		var matchImage = '';
		var totalDifference = 10000; 

		// Examine all existing friends in the list
		for (var i = 0; i < friends.length; i++) {
			var diff = 0;
			for (var j = 0; j < userResponse.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponse[j]);
			}

			if (diff < totalDifference) {
				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;

				console.log(matchName);
				console.log(matchImage);
			}
		}

		// Add new user
		friends.push(userInput);
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};