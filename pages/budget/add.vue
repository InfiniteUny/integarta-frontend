<template>
  <div>
    <v-row>
      <v-col cols="12">
        <PageTitle title="Tambah Anggaran" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <label for="form-amount">Nominal</label>
        <v-text-field
          id="form-amount"
          outlined
          placeholder="Ketik disini"
          type="number"
        />

        <label for="form-month">Bulan</label>
        <v-menu
          ref="monthPicker"
          v-model="monthPicker"
          :close-on-content-click="false"
          min-width="auto"
          offset-y
          transition="scale-transition"
        >
          <template #activator="{ on, attrs }">
            <v-text-field
              v-model="form.month"
              append-icon="mdi-calendar"
              readonly
              outlined
              placeholder="Pilih Bulan"
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <v-date-picker
            v-model="form.month"
            type="month"
            @change="save"
          />
        </v-menu>

        <label for="form-description">Keterangan</label>
        <v-text-field
          v-model="form.description"
          outlined
          placeholder="Ketik disini"
          type="text"
        />

        <v-btn block color="accent">
          Simpan Anggaran
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'

export default {
  name: 'AddBudget',

  component: {
    PageTitle
  },

  data: () => ({
    monthPicker: false,
    date: null,
    form: {
      amount: 0,
      month: '',
      description: ''
    }
  }),

  methods: {
    save () {
    }
  }
}
</script>

<style scoped>

</style>
