<template>
  <section class="container">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/chartjs">vue-chartjs</router-link></li>
      <li><router-link to="/charts">vue-charts</router-link></li>
      <li><router-link to="/chartkick">vue-chartkick</router-link></li>
    </ul>
    <h1>Demo examples of vue-chartjs</h1>
    <div class="columns">
      <div class="column">
        <h3>Line Chart</h3>
        <line-chart></line-chart>
      </div>
      <div class="column">
        <h3>Bar Chart</h3>
        <bar-chart></bar-chart>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h3>Bubble Chart</h3>
        <bubble-chart></bubble-chart>
      </div>
      <div class="column">
        <h3>Reactivity - Live update upon change in datasets</h3>
        <reactive-chart :chart-data="datacollection"></reactive-chart>
        <button class="button is-primary" @click="fillData()">random</button>
      </div>
    </div>
  </section>
</template>

<script>
  import LineChart from './LineChart'
  import BarChart from './BarChart'
  import BubbleChart from './BubbleChart'
  import ReactiveChart from './ReactiveChart'

  export default {
    name: 'VueChartJS',
    components: {
      LineChart,
      BarChart,
      BubbleChart,
      ReactiveChart
    },
    data() {
      return {
        datacollection: {}
      }
    },
    created () {
      // コンポーネントのインスタンスが生成されるときに毎回呼ばれる
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          // X軸
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              // Y軸
              data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      },
      // 乱数を生成
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
