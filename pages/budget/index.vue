<template>
  <div>
    <v-row>
      <v-col cols="12">
        <PageTitle disable-back title="Kelola Anggaran" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="py-0">
        <v-menu
          ref="monthPicker"
          v-model="monthPicker"
          :close-on-content-click="false"
          min-width="auto"
          offset-y
          transition="scale-transition"
        >
          <template #activator="{ on, attrs }">
            <v-chip outlined v-bind="attrs" v-on="on">
              <v-icon class="mr-3">
                mdi-calendar
              </v-icon>
              Bulan {{ toMonthName(month) }}
            </v-chip>
          </template>
          <v-date-picker
            v-model="month"
            type="month"
          />
        </v-menu>

        <div>
          <div class="mx-auto" style="max-width: 200px; position: relative;">
            <DoughnutChart
              v-if="!loading"
              :chart-data="chartData"
              :options="chartOptions"
              chart-id="chart-1"
              :width="100"
              :height="100"
              class="mt-3"
            />

            <div class="budget-summary">
              <div>
                Sisa Anggaran
              </div>

              <h2 style="" class="font-weight-bold">
                Rp {{ $utils.numberToLocaleString(items[0] ? items[0].expense : 0) }}
              </h2>

              <div>
                dari Rp {{ $utils.numberToLocaleString(items[0] ? items[0].amount : 0) }}
              </div>
            </div>
          </div>
        </div>

        <v-alert
          dense
          class="mt-3"
          outlined
          type="info"
          color="accent"
        >
          Kamu dapat menggunakan dana Rp17.000/hari hingga akhir bulan.
        </v-alert>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="py-0">
        <template v-for="item of items">
          <v-sheet
            :key="item.id"
            outlined
            class="mb-3 pa-3"
          >
            <div style="font-size: 16px;" class="font-weight-bold">
              Anggaran Bulan {{ toMonthName(item.months) }}
            </div>

            <div style="font-size: 13px;">
              {{ toMonthName(item.months.substring(4)) }} {{ item.months.substring(0, 4) }} / {{ getDaysRemaining(item.months) || 'Selesai' }}
            </div>

            <v-progress-linear class="my-1" height="10" rounded color="accent" :value="getExpensePercentage(item)" />

            <div style="font-size: 13px;">
              Terpakai
            </div>

            <div class="subtitle-1">
              Rp{{ $utils.numberToLocaleString(item.expense) }} dari Rp{{ $utils.numberToLocaleString(item.amount) }}
            </div>
          </v-sheet>
        </template>
      </v-col>
    </v-row>

    <v-fab-transition>
      <v-btn
        color="success"
        fab
        style="position: fixed; right: 10px; bottom: 66px;"
        to="/budget/add"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
import DoughnutChart from '@/components/chart/DoughnutChart'
import PageTitle from '@/components/PageTitle'

export default {
  name: 'BudgetIndex',

  components: {
    PageTitle,
    DoughnutChart
  },

  data: () => ({
    month: 5,
    monthPicker: null,
    chartData: {
      labels: ['Terpakai', 'Sisa'],
      datasets: [
        {
          backgroundColor: ['#D8D8D8', '#B983FF'],
          data: [700000, 2000000]
        }
      ]
    },
    chartOptions: {
      responsive: true,
      cutoutPercentage: 85,
      legend: {
        display: false
      }
    },
    items: [],
    loading: false
  }),

  mounted () {
    this.fetch()
  },

  methods: {
    async fetch () {
      this.loading = true
      try {
        const { data } = await this.$axios.get('/inf/api/budget-list')

        this.items = data.data.budget.map((item) => {
          item.expense = data.data.expenses.find(v => v.months === item.months)?.expenses || 0
          return item
        })
        this.chartData.datasets[0].data = [this.items[0].expense, this.items[0].amount]
      } catch (e) {
        console.error(e)
      } finally {
        this.loading = false
      }
    },

    toMonthName (dateString) {
      const date = new Date(dateString)

      return date.toLocaleString('id-ID', {
        month: 'long'
      })
    },

    getDaysRemaining (dateString) {
      const now = new Date()
      const budgetDate = new Date(dateString)
      if (Date.parse(budgetDate) < Date.parse(now)) {
        return null
      }

      const budgetDateEnd = this.$moment(budgetDate).add('month', 1)

      const diff = budgetDateEnd.diff(this.$moment(now), 'days')
      return diff + ' Hari'
    },

    getExpensePercentage (item) {
      return Math.floor((item.expense / item.amount) * 100)
    }
  }
}
</script>

<style scoped>
  .budget-summary {
    position: absolute;
    text-align: center;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
