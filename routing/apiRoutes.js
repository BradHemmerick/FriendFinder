const path = require('path')

const friends = require('./../app/data/friends.js')

// console.log(friends)

module.exports = (app) => {
    //get
    app.get('/api/friends', (req, res) => {
        res.json(friends)
    })
    //post
    app.post('/api/friends/', (req, res) => {
        console.log(req.body, 'this is req.body')
        
        var userInput = {
            name: req.body.name,
            picture: req.body.picture,
            scores: []
        }
        for (var i = 0; i < req.body['score[]'].length; i++){
            userInput.scores.push(parseInt(req.body['score[]'][i]))
        }


        console.log(userInput, "why")
        console.log(typeof userInput['name'])
        var userAns = userInput.scores;
        var friendName = '';
        var friendPic = '';
        var initialDiff = 50;

        for(var i = 0; i < friends.length;i++){
            var diff = 0;
            for(var u = 0; u < userAns.length; u++){
                diff += Math.abs(friends[i].scores - userAns[u])
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