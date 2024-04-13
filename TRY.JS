// jQuery is required for the provided JavaScript code
// Ensure that you include jQuery in your project

// Function to load the chart
function loadChart() {
    $("body").removeClass("loaded");
    setTimeout(function () {
      $("body").addClass("loaded");
    }, 500);
  }
  
  // Event handler for the "Do It Again" button click
  $(".js-do-it-again").on("click", function () {
    loadChart();
  });
  
  // Initial chart loading
  loadChart();