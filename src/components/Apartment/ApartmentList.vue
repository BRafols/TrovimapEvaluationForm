<template>
  <v-list three-line>
      <apartment-list-element v-for="item in items" :apartment="item" :key="item.Id" />
  </v-list>
</template>

<script>

import ApartmentListElement from './ApartmentListElement'
export default {
    components: {
        ApartmentListElement
    },
}
</script>

<style>
</style>