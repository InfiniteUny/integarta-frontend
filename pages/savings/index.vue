<template>
  <div>
    <v-row>
      <v-col cols="12">
        <PageTitle disable-back title="Tujuan Tabungan"/>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="py-0">
        <v-chip outlined v-bind="attrs" v-on="on">
          <v-icon class="mr-3">
            mdi-calendar
          </v-icon>
          Bulan {{ toMonthName(month) }}
        </v-chip>

        <div class="text-center mt-3">
          <div>Frekuensi Nabung</div>
          <h1 class="primary--text">Rp 100.000/bulan</h1>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="">
        <template v-for="item of items">
          <v-sheet
            :key="item.id"
            outlined
            class="mb-3 pa-3"
          >
            <div style="font-size: 16px;" class="font-weight-bold">
              {{ item.name}}
            </div>

            <div style="font-size: 13px;">
              {{ item.remaining_days }} hari lagi
            </div>

            <v-progress-linear class="my-1" height="10" rounded color="accent" :value="getExpensePercentage(item)" />

            <div style="font-size: 13px;">
              Terkumpul
            </div>

            <div class="subtitle-1">
              Rp{{ $utils.numberToLocaleString(item.temp_expense) }} dari Rp{{ $utils.numberToLocaleString(item.expense) }}
            </div>
          </v-sheet>
        </template>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'

export default {
  name: 'budget-index',

  components: {
    PageTitle
  },

  data: () => ({
    items: [
      {
        id: 1,
        name: 'Macbook Pro',
        remaining_days: 90,
        expense: 15000000,
        temp_expense: 14000000
      },
      {
        id: 2,
        name: 'Macbook Pro',
        remaining_days: 90,
        expense: 15000000,
        temp_expense: 14000000
      },
      {
        id: 3,
        name: 'Macbook Pro',
        remaining_days: 90,
        expense: 15000000,
        temp_expense: 14000000
      },
      {
        id: 4,
        name: 'Macbook Pro',
        remaining_days: 90,
        expense: 15000000,
        temp_expense: 14000000
      }
    ]
  }),

  methods: {
    toMonthName (dateString) {
      const date = new Date(dateString)

      return date.toLocaleString('id-ID', {
        month: 'long'
      })
    },

    getDaysRemaining (year, month) {
      const now = new Date()
      const budgetDate = new Date(`${year}-${month}`)
      if (Date.parse(budgetDate) < Date.parse(now)) {
        return null
      }

      const budgetDateEnd = this.$moment(budgetDate).add('month', 1)

      const diff = budgetDateEnd.diff(this.$moment(now), 'days')
      return diff + ' Hari'
    },

    getExpensePercentage (item) {
      return Math.floor((item.temp_expense / item.expense) * 100)
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
