document.addEventListener("DOMContentLoaded", function() {
    const button = document.createElement("button");
    button.textContent = "Change Color";
    button.addEventListener("click", function() {
      const h1 = document.querySelector("h1");
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      h1.style.color = "#" + randomColor;
    });
    document.body.appendChild(button);
  });

document.getElementById('openUrlButton').addEventListener('click', function() {
    var url = "https://imgur.com/a/bohGKzQ"; // Replace with your desired URL
    window.open(url, '_blank');
});

