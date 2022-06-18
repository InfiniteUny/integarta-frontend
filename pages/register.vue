<template>
  <v-row>
    <v-form ref="form">
      <v-col cols="12" />

      <v-col cols="12">
        <div class="title">
          Daftar
        </div>

        <div class="subtitle-1">
          Selamat datang, ayo kelola uangmu
        </div>
      </v-col>

      <v-col cols="12">
        <label for="form-email">Email</label>
        <v-text-field
          id="form-email"
          prepend-inner-icon="mdi-email"
          type="email"
          outlined
          placeholder="Ketik disini"
        />

        <label for="form-email">Password</label>
        <v-text-field
          id="form-password"
          prepend-inner-icon="mdi-lock"
          type="password"
          outlined
          placeholder="Ketik disini"
        />

        <label for="form-email">Konfirmasi Password</label>
        <v-text-field
          id="form-confirm-password"
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
        <v-btn block color="accent">
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
    </v-form>
  </v-row>
</template>

<script>
export default {
  name: 'AuthRegister'
}
</script>

<style scoped>

</style>
