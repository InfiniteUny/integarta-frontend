<template>
  <LineChart
    v-if="!loading"
    :chart-data="chartData"
    :options="chartOptions"
    chart-id="chart-2"
    :width="100"
    :height="100"
    class="mt-3"
  />
</template>

<script>
import LineChart from '@/components/chart/LineChart'
export default {
  name: 'TransactionHistoryChart.vue',

  components: {
    LineChart
  },

  data: () => ({
    items: [],
    chartData: {
      datasets: [
        {
          label: 'Pemasukan',
          backgroundColor: ['#FF6B6B'],
          data: []
        },
        {
          label: 'Pemasukan',
          backgroundColor: ['#59A963'],
          data: []
        }
      ]
    },
    chartOptions: {
      responsive: true,
      legend: {
        display: false
      }
    },
    income: [],
    expense: [],
    loading: false
  }),

  mounted () {
    this.fetch()
  },

  methods: {
    async fetch () {
      this.loading = true
      try {
        const { data } = await this.$axios.get('/inf/api/transactionHistory')

        this.items = data.data.transaction_history.map(item => ({
          date: item.date,
          amount: item.amount,
          direction: item.direction
        }))

        for (let i = 0; i < 50; i++) {
          const item = this.items[i]
          if (item.direction === 'in') {
            this.income.push(item.amount)
          } else {
            this.expense.push(item.amount)
          }
        }

        this.chartData.datasets[0].data = this.income
        this.chartData.datasets[1].data = this.expense
      } catch (e) {
        console.error(e)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>

</style>
