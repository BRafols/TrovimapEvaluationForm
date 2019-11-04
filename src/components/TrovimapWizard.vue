<template>
    <v-layout row wrap>
        <v-flex xs12>
            <div>
                hello {{ name }}
            </div>
        </v-flex>

        <v-flex xs12>
            <parcel-by-address />
        </v-flex>

        <v-flex xs12>
            <v-stepper v-model="stepperValue">
                <v-stepper-header>
                    <v-stepper-step step="1" :complete="stepperValue > 1">Name of step 1</v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step step="2" :complete="stepperValue > 2">Name of step 2</v-stepper-step>
                </v-stepper-header>
                <v-stepper-items>
                    <v-stepper-content step="1">
                        <parcel-by-address @complete="complete"/>
                        <v-btn color="primary" @click.native="stepperValue = 2">Continue</v-btn>
                        <v-btn flat>Cancel</v-btn>
                    </v-stepper-content>
                    <v-stepper-content step="2">
                        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                        <v-btn color="primary" @click.native="stepperValue = 3">Continue</v-btn>
                        <v-btn flat>Cancel</v-btn>
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </v-flex>
    </v-layout>
</template>

<script>

import ParcelByAddress from './Address/ParcelByAddress.vue'

export default {
    data() {
        return {
            name: 'borja',
            stepperValue: 1
        }
    },
    components: {
        ParcelByAddress
    },
    methods: {
        complete() {
            console.log('complete')
        }
    }
}
</script>

<style>
</style>