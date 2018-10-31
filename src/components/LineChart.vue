<script>
  import { Line } from 'vue-chartjs'
  import axios  from 'axios'

  export default {
    name: "LineChart",
    extends: Line,
    data() {
      return {
        info: {},
        TABLE_INF: {},
        CLASS_INF: {},
        DATA_INF: {},
        datacollection: {
          // X軸
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              // Y軸
              data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
            }
          ]
        },
        // チャート外観
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [{
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      // datacollectionとoptionsオブジェクトでグラフを描画
      this.renderChart(this.datacollection, this.options)
    },
  }
</script>

<style scoped>

</style>
