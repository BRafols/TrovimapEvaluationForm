<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-text-field
                name="address"
                label="Address"
                id="address"
                v-model="address"
            />
        </v-flex>

        <v-flex xs12>
            <v-btn block color="primary" @click="getParcelsByAddress">Buscar</v-btn>
        </v-flex>

        <v-flex xs12>
            <parcel-list />
        </v-flex>
    </v-layout>
</template>

<script>

import ParcelList from './list/ParcelList.vue'

export default {
    data() {
        return {
            address: 'Passatge Escudellers 7, 08002, Barcelona'
        }
    },
    components: {
        ParcelList
    },
    methods: {
        async getParcelsByAddress() {

            this.$store.dispatch('trovimap/FETCH_PARCELS_BY_ADDRESS', this.address)

            console.log('this', this)
        }
    }
}
</script>

<style>
</style>