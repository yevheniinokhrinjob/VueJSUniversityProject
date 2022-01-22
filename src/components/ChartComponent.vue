<template>
  <div>
    <canvas ref="canvas" :height="200"/>
  </div>

</template>

<script>
import {Pie} from 'vue-chartjs'

export default {
  name: 'App',
  extends: Pie,
  components: {},
  data() {
    return {
      values: [42, 26, 5, 27],
      labels: ['Dogs', 'Cats', 'Other', 'Do not have'],
      backgroundColors: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',

      ],
      borderColors: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',

      ]
    }
  },
  methods: {


    setup() {
      this.renderChart({
        labels: this.labels,
        datasets: [{
          data: this.values,
          backgroundColor: this.backgroundColors,
          borderColor: this.borderColors,
          borderWidth: 1
        }]
      })
    }
  }, mounted() {
    this.setup()

  }
}


</script>