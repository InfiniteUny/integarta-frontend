<template>
  <v-app>
    <v-main style="background: #f9f9f9; max-height: 100vh; min-height: 100vh;">
      <v-container style="max-height: calc(100% - 56px); min-height: calc(100% - 56px); overflow-y: scroll;">
        <Nuxt />
      </v-container>

      <v-bottom-navigation value="">
        <v-btn value="home" to="/dashboard">
          <span>Home</span>

          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn value="transaction" to="/transaction">
          <span>Transaksi</span>

          <v-icon>mdi-file-document</v-icon>
        </v-btn>

        <v-btn value="budget" to="/budget">
          <span>Anggaran</span>

          <v-icon>mdi-wallet</v-icon>
        </v-btn>

        <v-btn value="target" to="/savings">
          <span>Tujuan</span>

          <v-icon>mdi-star</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
