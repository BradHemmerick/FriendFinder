$('#submitScore').on('click', (event) => {
    event.preventDefault();
    
  var userProf = {
                  name: $('#name').val().trim(),
                  picture: $('#profPic').val().trim(),
                  score: []
                }
                for (var i = 1; i <= 10; i++) {
                  userProf.score.push($('#q' + i).val().trim())
                }
  console.log(userProf)
    // $.ajax("/api/friends/", {
    //   type: "POST",
    //   data: userProf
    // }).then(
    //   function () {
    //     console.log("created new cat");
    //     // Reload the page to get the updated list
    //     // location.reload();
    //   }
    //   );
    $.post("/api/friends/", userProf, function(data){
      $('#results-modal').modal('show');
      console.log(data)
      $('#match-name').html(data.friendName);
      console.log(data.friendName)
      $('#match-img').attr('src', data.friendPic)
    })
})