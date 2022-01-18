$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const foodInput = $("#food").val();
    const showInput = $("#show").val();
    const phoneBrandInput = $("#phoneBrand").val();
  
    $(".food").append(foodInput);
    $(".show").append(showInput);
    $(".phoneBrand").append(phoneBrandInput);

    $("#results").show();

    let array = ["burrito", "taco", "survivor", "chopped"];
    array.push(phoneBrandArray[0, 1]); // "taco"
    
    const phoneBrandArray = ["apple", "android"];
    
    });

  });
});
