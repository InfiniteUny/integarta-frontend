<template>
  <div>
    <v-row>
      <v-col cols="12">
        <PageTitle title="Riwayat Transaksi" disable-back />
      </v-col>

      <v-col cols="12">
        <div>
          <div class="subtitle-1 text-center">
            Total Saldo
          </div>

          <h1 class="primary--text text-center">
            4.000.000
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
                  4.000.000
                </h2>
              </v-col>

              <v-col cols="6">
                <div class="subtitle-1 text-center">
                  Pengeluaran
                </div>

                <h2 class="error--text text-center">
                  4.000.000
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
          <v-chip outlined large class="mr-3 flex-grow-0 flex-shrink-0">
            <v-icon>
              mdi-filter
            </v-icon>
            Filter
          </v-chip>

          <v-chip outlined large class="flex-grow-0 flex-shrink-0">
            <v-icon>
              mdi-download
            </v-icon>
            Laporan
          </v-chip>
        </div>

        <v-data-table :headers="tableHeaders" :items="items" show-expand mobile-breakpoint="0">
<!--          <template v-slot:expanded.item="{ headers, item }">-->
<!--            <tr v-for="detail of item.details" :key="detail.id">-->
<!--              <td>-->
<!--                {{ detail.name }}-->
<!--              </td>-->
<!--              <td>-->
<!--                {{ detail.income }}-->
<!--              </td>-->
<!--              <td>-->
<!--                {{ detail.expense }}-->
<!--              </td>-->
<!--            </tr>-->
<!--          </template>-->
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
      { text: '', value: 'date' },
      { text: 'Pemasukan', value: 'income' },
      { text: 'Pengeluaran', value: 'expense' }
    ],
    items: [
      {
        date: '2020-03-04',
        income: 200000,
        expense: 200000,
        details: [
          {
            id: 1,
            name: 'Makan Soto',
            income: 200000,
            expense: 200000
          },
          {
            id: 2,
            name: 'Makan Soto',
            income: 200000,
            expense: 200000
          }
        ]
      },
      {
        date: '2020-03-04',
        income: 200000,
        expense: 200000,
        details: [
          {
            id: 3,
            name: 'Makan Soto',
            income: 200000,
            expense: 200000
          },
          {
            id: 4,
            name: 'Makan Soto',
            income: 200000,
            expense: 200000
          }
        ]
      }
    ]
  })
}
</script>

<style scoped>

</style>
