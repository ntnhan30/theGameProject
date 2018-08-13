function Ball(x, y, vx, vy, radius) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.radius = radius;
    this.color = "red";

    // this.left = function () {
    //     return (this.x - this.radius)
    // };
    // this.right = function () {
    //     return (this.x + this.radius)
    // };
    // this.top = function () {
    //     return (this.y - this.radius)
    // };
    // this.bottom = function () {
    //     return (this.y + this.radius)
    // };
  }

  Ball.prototype.draw = function () {
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  };

  Ball.prototype.goToNextPosition = function () {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
  
    this.x += this.vx;
    this.y += this.vy;
  
    this.vy += 0.97;// for the gravity
  
    // Right and Left boundary
    if (this.x + this.radius >= width || this.x - this.radius < 0) {
      this.vx *= -0.97;
    }
    // Bottom and top boundary
    if (this.y + this.radius >= height || this.y - this.radius < 0) {
      this.vy *= -0.97;
    }
  
    if (this.x < this.radius)
      this.x = this.radius;
    if (this.x > width - this.radius)
      this.x = width - this.radius;
    // if (this.y < this.radius)
    //   this.y = this.radius;
    // if (this.y > height - this.radius)
    //   this.y = height - this.radius;
  };

  Ball.prototype.bottom = function () {
    return (this.y + this.radius)
  }
  Ball.prototype.left = function () {
    return (this.x - this.radius)
  
  }
  Ball.prototype.right = function () {
    return (this.x + this.radius)
  }

  Ball.prototype.nextLevel = function () {
    this.radius +=10;
    // this.x=0;
    // this.y=height-60;
  }