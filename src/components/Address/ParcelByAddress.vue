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
                :error-messages="errors"
            >
                <template v-slot:append>
                    <v-btn 
                        :disabled="loading"
                        @click="getParcelsByAddress"
                        color="primary"
                        block
                    >
                        Buscar

                        <v-progress-circular
                            v-if="loading"
                            indeterminate
                            color="white"
                        />
                    </v-btn>
                </template>
            </v-text-field>
        </v-flex>
    </v-layout>
</template>

<script>

export default {
    data() {
        return {
            address: 'Passatge Escudellers, 7',
            loading: false,
            response: {}
        }
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
    },
    computed: {
        errors() {
            if (!this.response.message) return []

            return [ this.response.message ]
        },
    }
}
</script>

<style>
</style>