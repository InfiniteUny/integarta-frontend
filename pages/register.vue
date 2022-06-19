<template>
  <div>
    <v-row>
      <v-col cols="12">
        <div class="title">
          Daftar
        </div>

        <div class="subtitle-1">
          Selamat datang, ayo kelola uangmu
        </div>
      </v-col>

      <v-col cols="12">
        <v-form ref="form">
          <label for="form-email">Nama</label>
          <v-text-field
            id="form-name"
            v-model="form.name"
            outlined
            placeholder="Ketik disini"
            prepend-inner-icon="mdi-account"
            type="text"
          />

          <label for="form-email">Email</label>
          <v-text-field
            id="form-email"
            v-model="form.email"
            outlined
            placeholder="Ketik disini"
            prepend-inner-icon="mdi-email"
            type="email"
          />

          <label for="form-email">Password</label>
          <v-text-field
            id="form-password"
            v-model="form.password"
            outlined
            placeholder="Ketik disini"
            prepend-inner-icon="mdi-lock"
            type="password"
          />

          <label for="form-email">Konfirmasi Password</label>
          <v-text-field
            id="form-confirm-password"
            v-model="form.password_confirmation"
            outlined
            placeholder="Ketik disini"
            prepend-inner-icon="mdi-lock"
            :rules="[v => form.password === form.password_confirmation || 'Password tidak sama']"
            type="password"
          />
        </v-form>

        <div class="text-right">
          <a href="/forgot-password">
            Lupa Kata Sandi?
          </a>
        </div>
      </v-col>

      <v-col cols="12">
        <v-btn block color="accent" :loading="loading" @click="register">
          Daftar
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
          Sudah punya akun? <a href="/login">Masuk</a>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'AuthRegister',

  data: () => ({
    form: {
      name: null,
      email: null,
      password: null,
      password_confirmation: null
    },
    loading: false
  }),

  methods: {
    async register () {
      this.loading = true
      try {
        const { status, data } = await this.$axios.post('/inf/api/auth/register', {
          name: this.form.name,
          email: this.form.email,
          password: this.form.password,
          password_confirmation: this.form.password_confirmation
        })

        console.log(status, data)
        this.$router.push('/login')
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>

</style>
