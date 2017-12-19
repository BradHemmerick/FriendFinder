const path = require('path')

const friends = require('./../app/data/friends.js')

// console.log(friends)

module.exports = (app) => {
    //get
    app.get('/api/friends', (req, res) => {
        res.json(friends)
    })
    //post
    app.post('/api/friends', (req,res) => {
        var userInput = req.body;

        var userAns = userInput.scores;
        var friendName ='';
        var friendPic = '';
        var initialDiff = 50;

        for(var i = 0; i<friends.length;i++){
            var diff = 0;
            for(var u = 0; u<userAns.length; u++){
                diff += Math.abs(friends[u].scores - userResponses[u])
            }
            if(diff < initialDiff){
                initialDiff = diff;
                friendName = friends[i].name;
                friendPic = friends[i].photo;
            }
        }
        friends.push(userInput)

        res.json({status: 'OK', friendName: friendName, friendPic: friendPic})
    })
}