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
            type="number"
            v-model="form.amount"
            outlined
          />

          <v-row>
            <v-col cols="6" class="py-0 pr-2">
              <label for="form-percentage">Persentase</label>
              <v-text-field
                id="form-percentage"
                type="number"
                outlined
                v-model="form.percentage"
              />
            </v-col>

            <v-col cols="6" class="py-0 pl-2">
              <label for="form-temp_expense">Persentase</label>
              <v-text-field
                id="form-temp_expense"
                type="number"
                outlined
                v-model="form.temp_expense"
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
  name: 'savings-add-target',

  components: {
    PageTitle
  },

  data: () => ({
    form: {
      name: null,
      amount: null,
      percentage: 0,
      temp_expense: 100
    }
  })
}
</script>
