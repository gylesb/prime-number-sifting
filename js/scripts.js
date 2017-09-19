$(document).ready(function() {
  $("#formOne").submit(function(event) {
    $("#primeNumbers p").empty();
    $("#primeNumbers ul").empty();
    var n = parseInt($("input#number").val());
    var primeArray = [];
    var multArray = [2, 3, 4, 5, 6, 7, 8, 9];

    for (var number = 1; number <= n; number++) {
      var notPrime = false;
      multArray.forEach(function(multiple) {
        if (number % multiple == 0 && number !== multiple) {
          notPrime = true;
        }
      });

      if (!notPrime) {
        primeArray.push("<li> " + number + "</li>" );
      }

    }
    $("#primeNumbers ul").append(primeArray);

    var length = primeArray.length;
    $("#primeNumbers p").append("There are " + length + " prime numbers less than " + n + ".");
    event.preventDefault();
  });
});
