<template>
  <div>
    <v-row>
      <v-col cols="12" class="d-flex">
        <div>
          <div class="subtitle-1">
            Total Saldo
          </div>
          <h3>
            Rp 4.000.000
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
        Chart
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
                <h2 class="mt-3">Rp 2.200.000</h2>
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
                <h2 class="mt-3">Rp 2.200.000</h2>
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

        <a href="/accounts">
          Lihat Semua
        </a>
      </v-col>

      <v-col cols="12" class="d-flex">
        <template v-for="(account, i) of accounts">
          <v-card :key="i" class="mr-3">
            <v-card-text class="d-flex">
              <div class="d-flex align-center justify-content-center">
                <v-avatar>
                  ?
                </v-avatar>
              </div>

              <div>
                <div class="subtitle-1">
                  {{ account.name }}
                </div>

                <h3>
                  Rp{{ numberToLocaleString(account.balance) }}
                </h3>
              </div>
            </v-card-text>
          </v-card>
        </template>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h3>
          Laporan Keuangan
        </h3>

        <v-chip-group active-class="primary">
          <v-chip outlined>
            Bulan Ini
          </v-chip>

          <v-chip outlined>
            Bulan Lalu
          </v-chip>
        </v-chip-group>
      </v-col>

      <v-col cols="12">
        <v-card>
          <v-card-text class="subtitle-1">
            <v-row>
              <v-col cols="12" class="d-flex">
                <div>
                  Pemasukan
                </div>

                <v-spacer />

                <div class="success--text font-weight-bold">
                  Rp{{ numberToLocaleString(200000) }}
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
                  Rp{{ numberToLocaleString(200000) }}
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
export default {
  name: 'mainDashboard',

  data: () => ({
    accounts: [
      {
        name: 'GoPay',
        balance: 1000000,
        icon: null
      },
      {
        name: 'BCA',
        balance: 1000000,
        icon: null
      }
    ]
  }),

  methods: {
    numberToLocaleString (number) {
      return Number(number).toLocaleString('id-id')
    }
  }
}
</script>

<style scoped>

</style>
