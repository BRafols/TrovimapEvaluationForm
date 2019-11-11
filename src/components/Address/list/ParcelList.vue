<template>
  <v-list three-line>
      <parcel-list-element @click="click(item)" v-for="item in items" :parcel="item" :key="item.Id" :active="active" />
  </v-list>
</template>

<script>

import ParcelListElement from './ParcelListElement.vue'
export default {
    data() {
        return {
            active: null
        }
    },
    components: {
        ParcelListElement
    },
    computed: {
        items() {
            return this.$store.state.trovimap.parcels
        }
    },
    methods: {
        click(item) {
            this.active = item.Id
            this.$emit('selected', item)
        }
    }
}
</script>

<style>
</style>