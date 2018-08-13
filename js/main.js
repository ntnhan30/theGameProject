var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var width = ctx.canvas.width;
var height = ctx.canvas.height;

var b1 = new Ball(100, 200, 5, 2, 10);
var player = new Player(0, height - 60, 60, 60);
var des = new Player(width - 60, height - 60, 60, 60);
var score = 0;

  document.getElementById("start-button").onclick = function() {
    document.location.reload();
  };


function update() {
    if (player.x > width - 60) {
        b1.radius += 5;
        player.x = 0;
        player.y = height - 60;
        score++;
    };
    if (crash()) {
        clearInterval(intervalID);
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    b1.draw();
    b1.goToNextPosition();
    player.draw();
    des.draw();
    drawScore()
}

var intervalID = setInterval(update, 20);
function start(){
return intervalID;
}

document.onkeydown = function (e) {
    if (e.keyCode === 39) {
        player.x += 25;
    } else if (e.keyCode === 37) {
        player.x -= 25;
    }
};

function crash() {
    // return false;
    return !(
        (player.top() > b1.bottom()) ||
        (player.right() < b1.left()) ||
        (player.left() > b1.right()))
}

function drawScore() {
    ctx.font = "30px sans-serif"
    ctx.fillText("Level: " + score, width - 150, 40)
}