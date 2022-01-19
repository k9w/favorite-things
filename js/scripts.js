$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const foodInput = $("#food").val(); // "apple"
    const showInput = $("#show").val(); // "fringe"
    const phoneBrandInput = $("#phoneBrand").val(); // "pixel"
  
    $(".food").append(foodInput);
    $(".show").append(showInput);
    $(".phoneBrand").append(phoneBrandInput);

    $("#results").show();
    $("#displayArray").show();

    let array = [foodInput, showInput, phoneBrandInput]; // ["apple", "fringe", "pixel"]
    array.forEach(); // "taco"
    
    
  });
});

/*
<p id="display-array"></p>
      <script type="text/javascript">
        var array = [0, 1, 2, 3, 4, 5];
        document.getElementById("display-array").textContent = array.join(", ");

/</script>
*/
