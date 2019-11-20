<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-text-field
                name="cadastral_reference"
                label="Referencia Cadastral"
                id="cadastral_reference"
                v-model="cadastral_reference"
                placeholder="Calle Valencia 359, 08002, Barcelona"
                @keydown.enter="getBuildingUnitByCadastralReference"
                :error-messages="errors"
            >
                <template v-slot:append>
                    <v-btn 
                        :disabled="loading"
                        @click="getBuildingUnitByCadastralReference"
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
                <div v-if="response && response.message" class="v-messages theme--light error--text">
                <div class="v-messages__wrapper">
                    <div class="v-messages__message" style="">{{ response.message }}</div>
                </div>
            </div>
            </v-text-field>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    props: {
        defaultCadastralReference: {
            type: String,
            default: () => ''
        }
    },
    data() {
        return {
            loading: false,
            cadastral_reference: this.defaultCadastralReference,
            response: {
                message: null
            }
        }
    },
    methods: {
        async getBuildingUnitByCadastralReference() {
            this.loading = true
            try {
                const result = await this.$store.dispatch('trovimap/FETCH_BUILDING_UNITS_BY_CADASTRAL_REFERENCE', this.cadastral_reference)
                this.response.message = null
                this.$emit('addressSelected', result)
            } catch (e) {
                this.response.message = e.data.message
            } finally {
                this.loading = false
            }
        },
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