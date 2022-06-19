<script>
import { Doughnut, mixins } from 'vue-chartjs'

export default {
  name: 'VrChart',
  extends: Doughnut,
  mixins: [mixins.reactiveProp],
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    chartData: {
      handler (newOption, oldOption) {
        if (this._chart) {
          this._chart.destroy()
        }
        this.renderChart(this.chartData, this.options)
      },
      deep: true
    },
    options: {
      handler (newOption, oldOption) {
        if (this._chart) {
          this._chart.destroy()
        }
        this.renderChart(this.chartData, this.options)
      },
      deep: true
    }
  },
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options)
  }
}
</script>
