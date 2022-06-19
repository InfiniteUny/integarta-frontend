<template>
  <div>
    <v-row>
      <v-col cols="12" class="d-flex">
        <div>
          <div class="subtitle-1">
            Total Saldo
          </div>
          <h3>
            Rp{{ $utils.numberToLocaleString(total_balance) }}
          </h3>
        </div>

        <v-spacer />

        <v-avatar>
          ?
        </v-avatar>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <TransactionHistoryChart />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col cols="6">
                <div class="d-flex">
                  <v-icon color="error" size="16" class="mr-3">
                    mdi-arrow-up
                  </v-icon>
                  <span class="subtitle-1">
                    Pengeluaran
                  </span>
                </div>
                <h2 class="mt-3">
                  Rp {{ $utils.numberToLocaleString(expense_this_month) }}
                </h2>
              </v-col>

              <v-col cols="6">
                <div class="d-flex">
                  <v-icon color="success" size="16" class="mr-3">
                    mdi-arrow-down
                  </v-icon>
                  <span class="subtitle-1">
                    Pemasukan
                  </span>
                </div>
                <h2 class="mt-3">
                  Rp {{ $utils.numberToLocaleString(income_this_month) }}
                </h2>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="d-flex">
        <h3>
          Akunmu
        </h3>

        <v-spacer />

        <a href="/account">
          Kelola Akun
        </a>
      </v-col>

      <v-col cols="12" class="d-flex">
        <template v-for="account of accounts">
          <v-card :key="account.id" class="mr-3">
            <v-card-text class="d-flex">
              <div class="d-flex align-center justify-content-center">
                <v-avatar>
                  ?
                </v-avatar>
              </div>

              <div>
                <div class="subtitle-1">
                  {{ account.institution.name }}
                </div>

                <h3>
                  Rp{{ $utils.numberToLocaleString(account.balance) }}
                </h3>
              </div>
            </v-card-text>
          </v-card>
        </template>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="pb-0">
        <h3>
          Laporan Keuangan
        </h3>

        <v-chip-group active-class="primary">
          <v-chip outlined large>
            Bulan Ini
          </v-chip>

          <v-chip outlined large>
            Bulan Lalu
          </v-chip>
        </v-chip-group>
      </v-col>

      <v-col cols="12" class="pt-0">
        <v-card>
          <v-card-text class="subtitle-1">
            <v-row>
              <v-col cols="12" class="d-flex">
                <div>
                  Pemasukan
                </div>

                <v-spacer />

                <div class="success--text font-weight-bold">
                  Rp{{ numberToLocaleString(income_last_month) }}
                </div>
              </v-col>
            </v-row>

            <v-row class="mt-0">
              <v-col cols="12" class="d-flex">
                <div>
                  Pengeluaran
                </div>

                <v-spacer />

                <div class="error--text font-weight-bold">
                  Rp{{ numberToLocaleString(expense_last_month) }}
                </div>
              </v-col>
            </v-row>

            <v-divider class="my-3" />

            <v-row>
              <v-col cols="12" class="d-flex">
                <div>
                  Keuntungan
                </div>

                <v-spacer />

                <div class="success--text font-weight-bold">
                  Rp{{ numberToLocaleString(200000) }}
                </div>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" class="pa-0">
                <v-btn block color="accent">
                  Lihat Detail
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TransactionHistoryChart from '@/components/TransactionHistoryChart'
export default {
  name: 'MainDashboard',

  components: {
    TransactionHistoryChart
  },

  data: () => ({
    accounts: [],
    total_balance: 0,
    income_this_month: 0,
    expense_this_month: 0,
    income_last_month: 0,
    expense_last_month: 0
  }),

  mounted () {
    this.fetch()
  },

  methods: {
    numberToLocaleString (number) {
      return Number(number).toLocaleString('id-id')
    },

    async fetch () {
      try {
        const { data } = await this.$axios.get('/inf/api/dashboard')

        this.total_balance = data.data.total_balance
        this.income_this_month = data.data.income_this_month
        this.expense_this_month = data.data.expense_this_month
        this.income_last_month = data.data.income_last_month
        this.expense_last_month = data.data.expense_last_month
        this.accounts = data.data.account
        console.log(data.accounts)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

</style>
