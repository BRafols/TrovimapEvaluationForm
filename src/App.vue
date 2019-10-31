<template>
  <v-app>
      <v-content>
          <v-container grid-list-xs>
              <v-layout row wrap>
                  <v-flex xs12>
                      <trovimap-wizard />
                  </v-flex>
              </v-layout>
          </v-container>
      </v-content>
  </v-app>
</template>

<script>

import TrovimapWizard from './TrovimapWizard.vue'

export default {
    components: {
        TrovimapWizard
    }
}
</script>

<style>
</style>