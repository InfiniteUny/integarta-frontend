<template>
  <div>
    <v-row>
      <v-col cols="12">
        <PageTitle disable-back title="Riwayat Transaksi" />
      </v-col>

      <v-col cols="12">
        <div>
          <div class="subtitle-1 text-center">
            Total Saldo
          </div>

          <h1 class="primary--text text-center">
            Rp {{ $utils.numberToLocaleString(total_balance) }}
          </h1>
        </div>
      </v-col>

      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col cols="6">
                <div class="subtitle-1 text-center">
                  Pendapatan
                </div>

                <h2 class="success--text text-center">
                  Rp {{ $utils.numberToLocaleString(total_income) }}
                </h2>
              </v-col>

              <v-col cols="6">
                <div class="subtitle-1 text-center">
                  Pengeluaran
                </div>

                <h2 class="error--text text-center">
                  Rp {{ $utils.numberToLocaleString(total_expense) }}
                </h2>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <div class="d-flex">
          <v-text-field
            class="mr-3"
            hide-details
            outlined
            prepend-inner-icon="mdi-magnify"
            rounded
          />
          <v-chip class="mr-3 flex-grow-0 flex-shrink-0" large outlined>
            <v-icon>
              mdi-filter
            </v-icon>
            Filter
          </v-chip>

          <v-chip class="flex-grow-0 flex-shrink-0" large outlined>
            <v-icon>
              mdi-download
            </v-icon>
            Laporan
          </v-chip>
        </div>

        <v-data-table
          :headers="tableHeaders"
          :items="items"
          mobile-breakpoint="0"
          group-by="date"
        >
          <template #item.income="{ item }">
            <div class="success--text font-weight-bold">
              Rp {{ $utils.numberToLocaleString(item.income) }}
            </div>
          </template>

          <template #item.expense="{ item }">
            <div class="error--text font-weight-bold">
              Rp {{ $utils.numberToLocaleString(item.expense) }}
            </div>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'

export default {
  name: 'TransactionHistory',

  components: {
    PageTitle
  },

  data: () => ({
    tableHeaders: [
      { text: '', value: 'date', groupable: true },
      { text: '', value: 'description' },
      { text: 'Pemasukan', value: 'income' },
      { text: 'Pengeluaran', value: 'expense' }
    ],
    items: [],
    total_balance: 0,
    total_expense: 0,
    total_income: 0
  }),

  mounted () {
    this.fetch()
  },

  methods: {
    async fetch () {
      try {
        const { data } = await this.$axios.get('/inf/api/transactionHistory')

        this.items = data.data.transaction_history.map(item => ({
          date: item.date,
          id: item.id,
          description: item.description,
          income: item.direction === 'in' ? item.amount : 0,
          expense: item.direction === 'out' ? item.amount : 0
        }))

        this.total_balance = data.data.total_balance
        this.total_income = this.items.reduce((a, item) => (Number(item.income) + a), 0)
        this.total_expense = this.items.reduce((a, item) => (Number(item.expense) + a), 0)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

</style>
