var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var width = ctx.canvas.width;
var height = ctx.canvas.height;

var b1 = new Ball(100, 200, 5, 2, 10);
var player = new Player(0, height - 60, 60, 60);
var des = new Player(width - 60, height - 60, 60, 60);
var score = 0;
var pSpeed= 25;
  document.getElementById("start-button").onclick = function() {
    document.location.reload();
  };


function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    b1.goToNextPosition();
    if (player.x > width - 60) {
        //b1.radius += 5;
        player.x = 0;
        player.y = height - 60;
        score++;
        pSpeed+=2;
        b1.nextLevel();
    };

    if (crash()) {
        gameOver();
    }
    b1.draw();
    player.draw();
    des.draw();
    drawScore()
}

var intervalID = setInterval(update, 20);
function start(){
return intervalID;
}

function gameOver (){
    ctx.font = "60px Jua"
    ctx.fillText(" Life sucks " , width/2-100, height/2)
    clearInterval(intervalID);

}

document.onkeydown = function (e) {
    if (e.keyCode === 39) {
        player.x += pSpeed;
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