document.addEventListener("DOMContentLoaded", function() {
    // You can add more complex JavaScript logic here
    // For example, a dynamic counter
    let counter = 0;
    setInterval(function() {
        counter++;
        document.getElementById("counter").innerText = counter;
    }, 1000);
});
