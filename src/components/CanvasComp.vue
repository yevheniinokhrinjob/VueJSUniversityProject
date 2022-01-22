<template>

  <div>

    <canvas id="myCanvas" v-bind:width="canvasWidth" v-bind:height="canvasHeight"/>
    <h1>{{ message }}</h1>
    <button @click="init()">Restart</button>
  </div>
</template>

<script>
const Direction = Object.freeze({Up: 1, Down: 2, Left: 3, Right: 4});
export default {

  data() {
    return {
      canvasHeight: 720,
      canvasWidth: 1440,
      message: "",
      Direction,
      direction: Direction.Up,
      xPoint: 0,
      yPoint: 0,
      step: 0,
      appleX: 0,
      appleY: 0,
      parts: [[]],
      isAlive: true,
      canvas: null
    }
  },
  methods: {
    init() {
      this.message = "",
          this.direction = Direction.Right,
          this.xPoint = 100,
          this.yPoint = 100,
          this.step = 20,
          this.appleX = 520,
          this.appleY = 480,
          this.parts = [[]],
          this.isAlive = true
      this.parts.push([100, 110])
      this.parts.push([100, 100])

    },
    move() {

      if (this.isAlive) {
        if (this.direction == Direction.Up) {
          this.yPoint -= this.step
        } else if (this.direction == Direction.Down) {
          this.yPoint += this.step
        } else if (this.direction == Direction.Left) {
          this.xPoint -= this.step
        } else if (this.direction == Direction.Right) {
          this.xPoint += this.step
        }
        this.checkIfAlive()
        this.makeStep(this.checkApple())

        this.draw()
      } else {
        this.message = "Game over. Your score is " + this.parts.length
      }
    },
    makeStep(isNewPart) {
      if (!isNewPart) {
        this.parts.shift()
      }
      this.parts.push([this.xPoint, this.yPoint])

    },
    changeDirection(event) {
      if (this.direction == Direction.Up || this.direction == Direction.Down) {
        if (event.code == 'ArrowLeft') {
          this.direction = Direction.Left
        } else if (event.code == 'ArrowRight') {
          this.direction = Direction.Right
        }
      } else if (this.direction == Direction.Left || this.direction == Direction.Right) {
        if (event.code == 'ArrowUp') {
          this.direction = Direction.Up
        } else if (event.code == 'ArrowDown') {
          this.direction = Direction.Down
        }
      }

      this.move()

    },
    checkIfAlive() {

      if (this.xPoint < 0 || this.xPoint > this.canvasWidth || this.yPoint < 0 || this.yPoint > this.canvasHeight) {
        this.isAlive = false
      }
      for (let i = 0; i < this.parts.length - 2; i++) {
        let temp = this.parts[this.parts.length - 1]
        if (temp[0] == this.parts[i][0] && temp[1] == this.parts[i][1]) {
          this.isAlive = false
        }
      }
    },
    checkApple() {

      if (this.parts[this.parts.length - 1][0] == this.appleX && this.parts[this.parts.length - 1][1] == this.appleY) {
        this.generateApple()
        return true
      }
      return false
    },
    generateApple() {
      let temp
      temp = Math.floor(Math.random() * Math.trunc(this.canvasWidth / 20))
      this.appleX = temp * 20
      temp = Math.floor(Math.random() * Math.trunc(this.canvasHeight / 20))
      this.appleY = temp * 20
      this.parts.forEach(el => {
        if (el[0] == this.appleX && this.appleY) {
          this.generateApple()
        }
      })
    },

    draw() {
      if (this.isAlive) {
        this.canvas.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.canvas.beginPath();
        this.canvas.fillStyle = "red"
        this.canvas.fillRect(this.appleX, this.appleY, this.step, this.step);
        this.canvas.fillStyle = '#17a2b8'
        this.parts.forEach(el => {
              this.canvas.fillRect(el[0], el[1], this.step, this.step);
            }
        )
      }

      this.canvas.stroke();
    },
    handleResize() {
      this.canvasWidth = window.innerWidth
      this.canvasHeight = window.innerHeight
    }
  }
  ,
  mounted() {
    document.addEventListener('keydown', this.changeDirection)
    window.addEventListener('resize', this.handleResize);
    document.body.onkeydown = function (e) {
      e = e || window.event;
      var c = e.keyCode;
      if (c > 36 && c < 41 || c > 32 && c < 37) return false;
    }


    var c = document.getElementById("myCanvas");
    this.canvas = c.getContext('2d');
    this.handleResize();
    this.init()
    this.draw()


    setInterval(this.move, 200)

  }
}

</script>

<style>
canvas {
  border: 1px solid gray;
  height: 75vh;
  width: 80vw;
  background-color: #f6f6f6;
}

button {
  padding: 10px;
  width: 120px;
  background: #ffffff;
  color: #000000;
  font-size: 14px;
  text-transform: uppercase;

}
</style>