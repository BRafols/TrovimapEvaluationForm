<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-stepper v-model="stepperValue">
                <v-stepper-header>
                    <v-stepper-step step="1" :complete="stepperValue > 1">Dirección del inmueble</v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step step="2" :complete="stepperValue > 2">Elija el apartamento</v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step step="3" :complete="stepperValue > 3">Datos extra</v-stepper-step>
                </v-stepper-header>

                <v-stepper-items>
                    <v-stepper-content step="1">
                        <parcel-by-address @addressSelected="this.onAddressSelected"/>
                        <v-layout row wrap>
                            <v-flex xs3 md2>
                                <v-btn
                                    color="primary"
                                    block
                                    @click.native="stepperValue = 2"
                                    :disabled="!address.Id"
                                >
                                    Siguiente
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-stepper-content>
                    <v-stepper-content step="2">
                        <building-unit :Id="address.Id" v-if="address.Id" @apartmentSelected="this.onApartmentSelected"/>

                         <v-layout row wrap>
                            <v-flex xs3 md2>
                                <v-btn
                                    color="primary"
                                    block
                                    @click.native="stepperValue = 3"
                                    :disabled="!apartment.Id"
                                >
                                    Siguiente
                                </v-btn>
                            </v-flex>
                            <v-flex xs3 offset-xs6 md2 offset-md8>
                                <v-btn 
                                    flat
                                    block
                                    @click.native="stepperValue = 1">Atrás</v-btn>
                            </v-flex>
                        </v-layout>            
                    </v-stepper-content>
                    <v-stepper-content step="3">
                        <v-layout row wrap>
                            <v-flex xs12>
                                <evaluation-element
                                    :parcel="address"
                                    :apartment="apartment"
                                    :apartmentId="apartment.Id"
                                    v-if="apartment.Id"
                                />
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                            <v-flex xs3 md2 offset-xs9 offset-md10>
                                <v-btn block flat @click.native="stepperValue = 2">Atrás</v-btn>
                            </v-flex>
                        </v-layout>
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </v-flex>
    </v-layout>
</template>

<script>

import ParcelByAddress from './Address/ParcelByAddress.vue'
import BuildingUnit from './BuildingUnit/BuildingUnit.vue'
import EvaluationElement from './Evaluation/EvaluationElement.vue'

export default {
    data() {
        return {
            name: 'borja',
            stepperValue: 1,
            address: {},
            apartment: {}
        }
    },
    components: {
        ParcelByAddress,
        BuildingUnit,
        EvaluationElement
    },
    methods: {
        onAddressSelected(address) {
            this.address = address
        },
        onApartmentSelected(apartment) {
            this.apartment = apartment
        }
    }
}
</script>

<style>
</style>
