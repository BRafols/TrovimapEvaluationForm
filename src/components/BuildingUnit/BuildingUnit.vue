<template>
  <v-layout row wrap>
      <v-flex xs12>
        <v-progress-circular
            v-if="loading"
            indeterminate
            color="primary"
        />
        <apartment-list 
            v-else
            @selected="apartmentSelected" 
            :items="apartments" 
        />
      </v-flex>
  </v-layout>
</template>

<script>

import ApartmentList from './../Apartment/ApartmentList.vue'

export default {
    props: {
        Id: {
            required: true,
            type: String
        }
    },
    data() {
        return {
            loading: false,
        }
    },
    components: {
        ApartmentList
    },
    computed: {
        apartments() {
            return this.$store.getters['trovimap/apartmentsById'](this.Id)
        }
    },
    methods: {
        async fetch() {
            this.loading = true

            try {
                await this.$store.dispatch('trovimap/FETCH_BUILDING_UNITS_BY_PARCEL', this.Id)
            } catch (e) {
                throw e
            } finally {
                this.loading = false
            }
        },
        apartmentSelected(apartment) {
            this.$emit('apartmentSelected', apartment)
        }
    },
    watch: {
        Id: {
            handler() {
                this.fetch()
            },
            immediate: true
        }
    }
}
</script>

<style>
</style>