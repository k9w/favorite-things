$(document).ready(funtion() {
  $("form#survey").submit(funtion(event) {
    event.preventDefault();
    const foodInput = $("#food").val();
    const showInput = $("#show").val();
    const brandInput = $("#brand").val();
  
    $(".food").append(foodInput);
    $(".show").append(showInput);
    $(".brand").append(brandInput);

  });
});