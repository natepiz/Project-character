$("button").click(function(){
    var trait;
    trait = $(".trait-input").val();
    var age;
    age = $(".age").val();
    age= parseInt(age);
    
    if (trait === "stupid"&& age >= 18) {
       $(".result").html("<p>Homer Simpson</p>" + "<img src= 'https://media2.giphy.com/media/YPjFIgSccMHS0/giphy.gif'>");
    }
    else if (trait === "stupid"&& age < 18) {
        $(".result").html("<p>Patrick Star</p>" + "<img src='https://media1.giphy.com/media/ajlmbBzUqYgUM/giphy.gif'>");    
        }
        else if (trait === "brave"&& age >= 18) {
        $(".result").html("<p>Harry Potter</p>" + "<img src='https://media.giphy.com/media/o5HKScC1PflLO/giphy.gif'>");   
        }
    else if (trait === "brave"&& age < 18) { 
        $(".result").html("<p>Steven Universe</p>" + "<img src='https://media.giphy.com/media/2wpxXIL0LEXDO/giphy.gif'>");
        }
    else {$(".result").html("<img src= 'https://media0.giphy.com/media/Ysce790SgjJK0/giphy.gif'>");
    }
});


//if ()