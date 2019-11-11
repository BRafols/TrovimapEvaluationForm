<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-text-field
                name="address"
                label="Dirección"
                id="address"
                v-model="address"
                placeholder="Calle Valencia 359, 08002, Barcelona"
                @keydown.enter="getParcelsByAddress"
            />
        </v-flex>
        <v-flex xs12>
            <div v-if="response && response.message" class="v-messages theme--light error--text">
                <div class="v-messages__wrapper">
                    <div class="v-messages__message" style="">{{ response.message }}</div>
                </div>
            </div>
        </v-flex>

        <v-flex xs12>
            <v-btn 
                block
                color="primary"
                :disabled="loading"
                @click="getParcelsByAddress"
            >
                Buscar
            </v-btn>
        </v-flex>

        <v-flex xs12 v-if="loading" text-sm-center>
            <v-progress-circular
                indeterminate
                color="primary"
            />
        </v-flex>
        <v-flex xs12 v-else>
            <parcel-list @selected="parcelSelected"/>
        </v-flex>
    </v-layout>
</template>

<script>

import ParcelList from './list/ParcelList.vue'

export default {
    data() {
        return {
            address: '',
            loading: false,
            response: {}
        }
    },
    components: {
        ParcelList
    },
    methods: {
        async getParcelsByAddress() {

            this.loading = true

            try {
                await this.$store.dispatch('trovimap/FETCH_PARCELS_BY_ADDRESS', this.address)
            } catch (e) {
                this.response = { ...e.data }
            } finally {
                this.loading = false
            }
        },
        parcelSelected(parcel) {
            this.$emit('addressSelected', parcel)
        }
    }
}
</script>

<style>
</style>