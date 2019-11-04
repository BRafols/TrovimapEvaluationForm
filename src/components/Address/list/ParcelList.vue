<template>
  <v-list three-line>
      <parcel-list-element v-for="item in items" :parcel="item" :key="item.Id" />
  </v-list>
</template>

<script>

import ParcelListElement from './ParcelListElement.vue'
export default {
    components: {
        ParcelListElement
    },
    computed: {
        items() {
            return this.$store.state.trovimap.parcels
        }
    }
}
</script>

<style>
</style>