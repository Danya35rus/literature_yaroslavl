window.onload = function () {
  var inputs = document.querySelectorAll("input[type=radio]");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("click", function () {
      var questionDiv = this.closest(".question");
      var explanations = questionDiv.querySelectorAll(".explanation");
      for (var j = 0; j < explanations.length; j++) {
        explanations[j].style.display = "none";
      }
      var selectedExplanation = questionDiv.querySelector(
        ".explanation." + this.value
      );
      selectedExplanation.style.display = "block";
    });
  }
};