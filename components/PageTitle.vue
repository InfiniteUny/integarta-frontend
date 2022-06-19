<template>
  <div class="d-flex align-center">
    <div v-if="!disableBack">
      <v-btn text fab small class="mr-3" @click="$router.back()">
        <v-icon>
          mdi-chevron-left
        </v-icon>
      </v-btn>
    </div>

    <div class="font-weight-bold" style="font-size: 20px;">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',

  props: {
    title: {
      type: String,
      default: null
    },
    disableBack: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
