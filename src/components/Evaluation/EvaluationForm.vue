<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-form>
                <v-layout row wrap>
            
                    <!-- livingArea -->
                    <v-flex xs12 sm4>
                        <v-text-field
                            name="surface"
                            label="Superfície"
                            id="surface"
                            v-model="payload.LivingArea"
                            @keydown.enter="fetchEvaluation"
                        ></v-text-field>
                    </v-flex>

                    <!-- Baños -->
                    <v-flex xs12 sm4>
                        <v-text-field
                            name="bathrooms"
                            label="Número de baños"
                            id="bathrooms"
                            v-model="payload.Bathrooms"
                            @keydown.enter="fetchEvaluation"
                        ></v-text-field>
                    </v-flex>

                    <!-- Habitaciones -->
                    <v-flex xs12 sm4>
                        <v-text-field
                            name="bedrooms"
                            label="Número de habitaciones"
                            id="bedrooms"
                            v-model="payload.Bedrooms"
                            @keydown.enter="fetchEvaluation"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>

                    <!-- User data -->
                    <v-flex xs12 sm4 v-if="!user.firstName">
                        <v-text-field
                            name="firstName"
                            label="Nombre"
                            id="firstName"
                            v-model="payload.firstName"
                            @keydown.enter="fetchEvaluation"
                            :errors="hasError('firstName')"
                            :error-messages="errors('firstName')"
                        ></v-text-field>
                    </v-flex>

                    <!-- User data -->
                    <v-flex xs12 sm4 v-if="!user.email">
                        <v-text-field
                            name="email"
                            label="Email"
                            id="email"
                            v-model="payload.email"
                            @keydown.enter="fetchEvaluation"
                            :errors="hasError('email')"
                            :error-messages="errors('email')"
                        ></v-text-field>
                    </v-flex>

                    <!-- User data -->
                    <v-flex xs12 sm4 v-if="!user.phone">
                        <v-text-field
                            name="phone"
                            label="Teléfono"
                            id="phone"
                            v-model="payload.phone"
                            @keydown.enter="fetchEvaluation"
                            :errors="hasError('phone')"
                            :error-messages="errors('phone')"
                        ></v-text-field>
                    </v-flex>
                </v-layout>

                <v-layout row wrap>
                    <v-btn color="primary" block @click="fetchEvaluation" :disabled="loading">
                        Obtener valoración
                        <v-progress-circular
                            indeterminate
                            color="primary"
                            v-if="loading"
                        />
                    </v-btn>
                </v-layout>
            </v-form>
        </v-flex>
    </v-layout>
</template>

<script>

const defaultResponse = () => {
    return {
        fields: [],
        message: null
    }
}

export default {
    props: {
        apartmentId: {
            type: String,
            required: true
        },
        apartment: {
            type: Object,
            required: true
        },
        defaultBedrooms: {
            type: Number,
            default: () => 0
        },
        defaultBathrooms: {
            type: Number,
            default: () => 0
        },
        reference: {
            type: String,
            default: () => null
        },
        user: {
            type: Object,
            default: () => {
                return {
                    firstName: null,
                    email: null,
                    phone: null,
                }
            }
        }
    },
    data() {
        return {
            payload: {
                ApartmentId: this.apartmentId,
                Bathrooms: this.defaultBathrooms,
                Bedrooms: this.defaultBedrooms,
                firstName: this.user.firstName,
                email: this.user.email,
                phone: this.user.phone,
                reference: this.reference,
            },
            loading: false,
            response: defaultResponse()
        }
    },
    methods: {
        errors(key) {
            if (!this.hasError(key)) return []

            return this.response.fields[key]
        },
        hasError(key) {
            if (!this.response) return false
            if (!this.response.fields) return false

			return this.response.fields[key] !== undefined
        },
        async fetchCharacteristics() {

            this.loadingCharacteristics = true

            try {
                const characteristics = await this.$store.dispatch('trovimap/FETCH_CHARACTERISTICS_BY_APARTMENT_ID', this.apartmentId)
                this.payload = {
                    ...this.payload,
                    ... {
                        ParcelId: characteristics.ParcelId,
                        CadastralReference: characteristics.CadastralReference,
                        Location: {
                            lat: characteristics.Location.lat,
                            lon: characteristics.Location.lon
                        },
                        LivingArea: characteristics.LivingArea
                    },
                }
            } catch (e) {
                throw e
            } finally {
                this.loadingCharacteristics = false
            }
        },
        async fetchEvaluation() {
            this.loading = true
            try {
                const result = await this.$store.dispatch('trovimap/FETCH_EVALUATION_BY_APARTMENT_ID', {
                    payload: {
                        ...this.payload,
                    },
                    apartmentId: this.apartmentId,
                })

                this.$emit('evaluationCompleted', result)
                this.response = { ...defaultResponse() }
            } catch(response) {
                this.response = { ...response.data }
            } finally {
                this.loading = false
            }
        },
    },
    watch: {
        apartmentId: {
            handler() {
                this.fetchCharacteristics()
            },
            immediate: true
        },
    }
}
</script>

<style>
</style>