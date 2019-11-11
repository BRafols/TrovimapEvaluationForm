<template>
  <v-layout row wrap>
      <v-flex xs12>
          <v-form>
          <v-layout row wrap>
            
                <v-flex xs12 sm4>
                    <v-text-field
                        name="surface"
                        label="Superfície"
                        id="surface"
                        v-model="payload.LivingArea"
                        @keydown.enter="fetchEvaluation"
                    ></v-text-field>
                </v-flex>

                <v-flex xs12 sm4>
                    <v-text-field
                        name="bathrooms"
                        label="Número de baños"
                        id="bathrooms"
                        v-model="payload.Bathrooms"
                        @keydown.enter="fetchEvaluation"
                    ></v-text-field>
                </v-flex>

                <v-flex xs12 sm4>
                    <v-text-field
                        name="bedrooms"
                        label="Número de habitaciones"
                        id="bedrooms"
                        v-model="payload.Bedrooms"
                        @keydown.enter="fetchEvaluation"
                    ></v-text-field>
                </v-flex>

                <!-- User data -->
                <v-flex xs12 sm4>
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
                <v-flex xs12 sm4>
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
                <v-flex xs12 sm4>
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
      <v-flex 
        xs12
        v-if="evaluation"
      >
            <v-layout row wrap py-3>
                <v-flex xs6 text-sm-left>
                    <h4 class="subheading mb-0">Precio minimo: {{ evaluation.troviValue - evaluation.troviValue * 0.10 }} €</h4>    
                </v-flex>
                <v-flex xs6 text-sm-right>
                    <h4 class="subheading mb-0 grey--text"> Precio máximo: {{ evaluation.troviValue+ evaluation.troviValue * 0.10 }} €/m2</h4>
                </v-flex>
            </v-layout>
            
            <v-layout row wrap py-3>
                <!-- price evolution -->
                <v-flex xs12>
                    <price-evolution :items="priceItems"/>
                </v-flex>
            </v-layout>

            <v-layout row wrap py-3>
                <v-flex xs12>
                    <gmap-street-view-panorama 
                        class="pano" 
                        :position="{
                            lat: apartment.Characteristics.Location.lat,
                            lng: apartment.Characteristics.Location.lon
                        }"
                        :zoom="7"
                    />
                </v-flex>
            </v-layout>

            <v-layout row wrap>
                <v-flex xs12>
                    <v-layout row wrap grid-list-lg>
                        <v-flex sm4 md3 v-for="comparable in evaluation.comparables" :key="comparable.Sysid">
                            <comparable :comparable="comparable"/>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
            {{ response }}
          
      </v-flex>
  </v-layout>
</template>

<script>

import PriceEvolution from './History/PriceEvolution.vue'
import Comparable from './Comparable.vue'
import { type } from 'os'

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
        parcel: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            payload: {
                ApartmentId: this.apartmentId,
                Bathrooms: 0,
                Bedrooms: 0,
                firstName: '',
                email: '',
                phone: ''
            },
            loading: false,
            response: {
                fields: [],
                message: null
            }
        }
    },
    mounted() {
        this.fetchCharacteristics()
    },
    components: {
        PriceEvolution,
        Comparable
    },
    computed: {
        evaluation() {
            return this.$store.state.trovimap.evaluations[this.apartmentId]
        },
        priceItems() {
            const countFilter = parseInt(this.evaluation.historicalStats.aggregations.length / 7, 10)
            
            return this.evaluation.historicalStats.aggregations
                .filter((agregation, index, arr) => {
                    return (index % countFilter === 0 || index === arr.length - 1)
                })
                .map((agregation) => {
                    return {
                        value: parseInt(agregation.pricem2.avg * this.apartment.LivingArea, 10),
                        date: agregation.date
                    }
                })
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
        async fetchEvaluation() {
            this.loading = true
            try {
                await this.$store.dispatch('trovimap/FETCH_EVALUATION_BY_APARTMENT_ID', {
                    payload: {
                        ...this.payload,
                    },
                    apartmentId: this.apartmentId,
                })
            } catch(response) {
                this.response = { ...response.data }
            } finally {
                this.loading = false
            }
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
        async download() {
            try {
                const response = await this.$store.dispatch('trovimap/DOWNLOAD_EVALUATION_BY_ID', this.evaluation.id)

                this.forceFileDownload(response)
            } catch (e) {
                throw e
            }
        },
        forceFileDownload(response){
            
            const blob = new Blob([response.data], {
                type: response.headers.context-type
            })
            
            let link = document.createElement('a')
            link.href = window.URL.createObjectURL(blob)
            link.download = `download.pdf`
            link.click()
        }
    },
    watch: {
        apartmentId() {
            this.fetchCharacteristics()
        }
    }
}
</script>

<style>
.vue-street-view-pano-container {
  height: 50vh;
}
</style>