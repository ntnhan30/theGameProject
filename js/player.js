function Player(x, y, width, height) {
    this.x = x;
    this.y = y;
    //this.vx=vx;
    this.width = width;
    this.height = height;
    this.imgPlayer = new Image();
    this.imgPlayer.src = "images/turd-smiley.png";
    // ciommenz 
    // this.left = function () {
    //     return this.x
    // };
    // this.right = function () {
    //     return (this.x + this.width)
    // };
    // this.top = function () {
    //     return this.y
    // };
    // this.bottom = function () {
    //     return (this.y + this.height)
    // };
}

Player.prototype.draw = function () {
    ctx.drawImage(this.imgPlayer, this.x, this.y, this.width, this.height);
};

Player.prototype.top = function () {
    return this.y; 
};Player.prototype.left = function () {
    return this.x; 
};Player.prototype.right = function () {
    return (this.x + this.width);
};Player.prototype.bottom = function () {
    return (this.y + this.height);
  }