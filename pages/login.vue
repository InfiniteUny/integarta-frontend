<template>
  <v-row>
    <v-form ref="form">
      <v-col cols="12" />

      <v-col cols="12">
        <div class="title">
          Masuk
        </div>

        <div class="subtitle-1">
          Selamat datang, ayo kelola uangmu
        </div>
      </v-col>

      <v-col cols="12">
        <label for="form-email">Email</label>
        <v-text-field
          id="form-email"
          v-model="form.email"
          prepend-inner-icon="mdi-email"
          type="email"
          outlined
          placeholder="Ketik disini"
        />

        <label for="form-password">Password</label>
        <v-text-field
          id="form-password"
          v-model="form.password"
          prepend-inner-icon="mdi-lock"
          type="password"
          outlined
          placeholder="Ketik disini"
        />

        <div class="text-right">
          <a href="/forgot-password">
            Lupa Kata Sandi?
          </a>
        </div>
      </v-col>

      <v-col cols="12">
        <v-btn block color="accent" :loading="loading" @click="login">
          Masuk
        </v-btn>
        <div class="text-center my-3">
          atau masuk dengan
        </div>
        <v-btn block color="white">
          <v-icon>
            mdi-google
          </v-icon>
          Google
        </v-btn>

        <div class="text-center mt-3">
          Belum punya akun? <a href="/register">Daftar</a>
        </div>
      </v-col>
    </v-form>
  </v-row>
</template>

<script>
export default {
  name: 'AuthLogin',

  data: () => ({
    form: {
      email: '',
      password: ''
    },
    loading: false
  }),

  methods: {
    login () {
      this.loading = true

      this.$axios.get('/inf/sanctum/csrf-cookie', {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        withCredentials: true
      })
        .then(() => {
          this.$auth.loginWith('local', {
            data: {
              email: this.form.email,
              password: this.form.password
            }
          }).then(() => {
            this.$router.push('/dashboard')
          })
        })
    }
  }
}
</script>

<style scoped>

</style>
