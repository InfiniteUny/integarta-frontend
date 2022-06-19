<template>
  <div>
    <v-row>
      <v-col cols="12">
        <PageTitle title="Edit Frekuensi Tabungan" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-form>
          <label for="form-frequency">Frekuensi Nabung</label>
          <v-select
            v-model="form.frequency"
            :items="frequencySelect"
            outlined
          />

          <label for="form-amount">Nominal</label>
          <v-text-field
            v-model="form.amount"
            outlined
          />

          <v-btn block color="accent" large>
            Simpan Frekuensi Nabung
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'

export default {
  name: 'SavingsEditAmount',

  components: {
    PageTitle
  },

  data: () => ({
    form: {
      amount: 0,
      frequency: 30
    },

    frequencySelect: [
      { text: 'Harian', value: 1 },
      { text: 'Mingguan', value: 7 },
      { text: 'Bulanan', value: 30 }
    ]
  })
}
</script>
