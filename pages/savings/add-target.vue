<template>
  <div>
    <v-row>
      <v-col cols="12">
        <PageTitle title="Tambah Tujuan" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-form>
          <label for="form-amount">Tujuan Kamu</label>
          <v-text-field
            id="form-amount"
            v-model="form.name"
            outlined
          />
          <label for="form-frequency">Kebutuhan</label>
          <v-text-field
            id="form-frequency"
            v-model="form.amount"
            type="number"
            outlined
          />

          <v-row>
            <v-col cols="6" class="py-0 pr-2">
              <label for="form-percentage">Persentase</label>
              <v-text-field
                id="form-percentage"
                v-model="form.percentage"
                type="number"
                outlined
              />
            </v-col>

            <v-col cols="6" class="py-0 pl-2">
              <label for="form-temp_expense">Nominal</label>
              <v-text-field
                id="form-temp_expense"
                v-model="form.temp_expense"
                disabled
                type="number"
                outlined
              />
            </v-col>
          </v-row>

          <v-btn block color="accent" large>
            Simpan Tujuan
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'

export default {
  name: 'SavingsAddTarget',

  components: {
    PageTitle
  },

  data: () => ({
    form: {
      name: null,
      amount: null,
      percentage: 0,
      temp_expense: 0
    }
  })
}
</script>
