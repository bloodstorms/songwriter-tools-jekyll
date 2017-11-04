window.onload = function () {
  var main = new Vue({
    el: '#app',
    data: {
      inputNumberR: 0,
      inputNumberB: 0,
      inputNumberN: 0,
      inputNumberC: 0,
      inputNumberDC: 0,
      inputNumberTC: 0,
      inputNumberRP: 0,
      inputNumberBP: 0,
      inputNumberNP: 0,
      inputNumberCP: 0,
      inputNumberDCP: 0,
      inputNumberTCP: 0,
      inputNumberTrioB: 0,
      inputNumberTrioN: 0,
      inputNumberTrioC: 0,
      inputNumberTrioDC: 0,
      inputNumberTrioTC: 0,
      inputNumberTrioQC: 0,
      inputNumberTotal: 0,
      remainingNotesC: 0,
      math: window.math,
    },
    methods: {
    	updateNumb: function() {
        this.inputNumberTotal = this.inputNumberR * 4 + this.inputNumberB * 2 + this.inputNumberN + this.inputNumberC * 0.5 + this.inputNumberDC * 0.25 + this.inputNumberTC * 0.125 + this.inputNumberRP * (4 + 4/2) + this.inputNumberBP * (2 + 2/2) + this.inputNumberNP * (1 + 1/2) + this.inputNumberCP * (0.5 + 0.5/2) + this.inputNumberDCP * (0.25 + 0.25/2) + this.inputNumberTCP * (0.125 + 0.125/2) + this.inputNumberTrioB * 4 + this.inputNumberTrioN * 2 + this.inputNumberTrioC + this.inputNumberTrioDC * 0.5 + this.inputNumberTrioTC * 0.25 + this.inputNumberTrioQC * 0.125;
      },

      increaseValue: function(variable) {
        this[variable] += 1;
        this.updateNumb();
        console.log("It still remain " + (4 - this.inputNumberTotal));
      },

      decreaseValue: function(variable) {
        if(this[variable] === 0) {
          alert("0 is the min");
        }
        else {
          this[variable] --;
          this.updateNumb();
        }
        console.log("It still remain " + (4 - this.inputNumberTotal));
      },

      remainingNotesCounter: function(value) {
        debugger;
        return Math.floor((4 - this.inputNumberTotal) / value);
      },

      handler: function(variable, value, remain) {
        this.increaseValue(variable);
      }
    }
  });
}
