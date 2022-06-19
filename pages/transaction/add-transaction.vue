<template>
  <div>
    <v-row>
      <v-col cols="12">
        <PageTitle title="Tambah Transaksi" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-chip-group>
          <v-chip selected active-class="error">
            Pengeluaran
          </v-chip>

          <v-chip active-class="success">
            Pemasukan
          </v-chip>
        </v-chip-group>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
export default {
  name: 'AddTransaction',

  component: {
    PageTitle
  }
}
</script>

<style scoped>

</style>
