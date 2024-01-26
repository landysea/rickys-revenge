document.getElementById('changeColorButton').addEventListener('click', function() {
    var header = document.getElementById('header');
    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }
    header.style.color=color;
});

document.getElementById('openUrlButton').addEventListener('click', function() {
    var url = "https://imgur.com/a/bohGKzQ"; // Replace with your desired URL
    window.open(url, '_blank');
});