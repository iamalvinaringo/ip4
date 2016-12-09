//Business Logic
var scores = function(randomNumber, points) {
  if(randomNumber === 1 || randomNumber === 6){
      points = 0;
  } else {
      points += randomNumber;
  };
  return points;
};


//User Interface Logic
$(document).ready(function(){
  $("#roll").click(function(){
    var randomNumber = Math.round(Math.random() * 6) + 1;
    var points = 0;
    scores(randomNumber, points);

    $("#output1").append("<li>" + points + "</li>");
  });
});
