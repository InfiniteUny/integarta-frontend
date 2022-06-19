<template>
  <div>
    <v-row>
      <v-col cols="12">
        <PageTitle title="Internet Banking"/>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-sheet class="pa-3 d-flex" outlined rounded>
          <v-avatar size="24">
            ?
          </v-avatar>

          <div class="d-flex align-center font-weight-bold ml-3" style="font-size: 14px;">
            Bank BRI
          </div>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-form>
          <label class="font-weight-medium" for="form-userid" style="font-size: 14px;">User ID</label>
          <v-text-field
            class="mb-3"
            hide-details
            outlined
            placeholder="Ketik disini"
            prepend-inner-icon="mdi-account"
          />

          <label class="font-weight-medium" for="form-password" style="font-size: 14px;">Password</label>
          <v-text-field
            hide-details
            outlined
            placeholder="Ketik disini"
            prepend-inner-icon="mdi-lock"
          />

          <v-btn block color="accent" class="mt-3">
            Simpan
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'

export default {
  name: 'accountAddInternetBanking',

  component: {
    PageTitle
  }
}
</script>

<style scoped>

</style>
