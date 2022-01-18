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

    const foodArray = ["burrito", "taco"];
    let doubledFoodArray = [];
    foodArray.forEach(function(element) {
      doubledFoodArray.push(element + 2);
    });
    
    let foodSelectedArray = ["burrito", "taco"];
    showSelectedArray.push(foodSelectedArray[1]); // "taco"
    showSelectedArray.push("chopped");
    
    
    const showArray = ["survivor", "chopped"];
    let doubledShowArray = [];
    showArray.forEach(function(element) {
      doubledShowArray.push(element + 2);
    });

    const phoneBrandArray = ["apple", "android"];
    let doubledPhoneBrandArray = [];
    phoneBrandArray.forEach(function(element) {
      doubledPhoneBrandArray.push(element + 2);
    });

  });
});
