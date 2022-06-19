<template>
  <div>
    <v-row>
      <v-col cols="12">
        <PageTitle title="Akunmu"/>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="py-0" cols="12">
        <v-chip-group active-class="primary">
          <v-chip v-for="type of types" :key="type" outlined>
            {{ type }}
          </v-chip>
        </v-chip-group>

        <v-sheet
          v-for="account of accounts"
          :key="account.id"
          class="mb-3 d-flex align-center pa-2"
          outlined
          rounded
          style="width: 100%"
        >
          <div>
            <v-avatar>
              ?
            </v-avatar>
          </div>

          <div>
            <div class="font-weight-bold" style="font-size: 14px;">
              {{ account.name }}
            </div>

            <div v-if="account.connected" class="success--text" style="font-size: 12px;">
              Sudah Terhubung
            </div>

            <div v-else class="error--text" style="font-size: 12px;">
              Belum Terhubung
            </div>
          </div>

          <div class="d-flex align-center ml-auto">
            <v-btn fab text small to="">
              <v-icon>
                mdi-chevron-right
              </v-icon>
            </v-btn>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'

export default {
  name: 'your-account',

  component: {
    PageTitle
  },

  data: () => ({
    types: [
      'Bank',
      'E-Wallet',
      'E-Commerce'
    ],

    accounts: [
      {
        id: 1,
        name: 'Bank BCA',
        connected: true,
        icon: ''
      },
      {
        id: 2,
        name: 'Bank Mandiri',
        connected: true,
        icon: ''
      },
      {
        id: 3,
        name: 'Bank BRI',
        connected: false,
        icon: ''
      },
      {
        id: 4,
        name: 'Bank BNI',
        connected: false,
        icon: ''
      }
    ]
  })
}
</script>

<style scoped>

</style>
