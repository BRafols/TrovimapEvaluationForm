<template>
  <v-list three-line>
      <apartment-list-element @click="click(item)" v-for="item in items" :apartment="item" :key="item.Id" :active="active"/>
  </v-list>
</template>

<script>

import ApartmentListElement from './ApartmentListElement.vue'
export default {
    data() {
        return {
            active: null
        }
    },
    components: {
        ApartmentListElement
    },
    props: {
        items: {
            type: Array,
            default: () => []
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