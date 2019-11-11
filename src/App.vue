<template>
  <v-app>
      <v-content>
          <v-container grid-list-xs>
              <v-layout row wrap>
                  <v-flex xs12>
                    <!-- Wizard -->
                      <trovimap-wizard />
                  </v-flex>
                </v-layout>
                <v-layout row wrap v-if="false">

                    <v-flex xs12>
                        <h2>Parcel by Address</h2>
                        <parcel-by-address />
                    </v-flex>

                    <v-flex xs12>
                        <h2>Building Unit</h2>
                        <building-unit Id="SXBNaEJyVnc2aTM4cDRtMGVMR3hjcHRpK3N0VGFTOXhUNEZaRkt5azk3dWFJT1NRMVFIbHpxbnNPcktQY21QOG82ZkZobFZjTGFBdzkxejdYTi9WeEprNjg3UFdQd1JlOEVOVHpJbTducGFqSi9mSzRWOVc3V1FlSXc1dHBicUV0WHFPNnNUVmptOXBOWFBkVEMrNU1XVEtFakthbGJyV01ub2xUSzBYZWN3PQ==" />
                    </v-flex>

                    <v-flex xs12>
                        <h2>Evaluation Element</h2>
                        <evaluation-element apartmentId="8_900_1213625DF3811C_001_6" />
                    </v-flex>
              </v-layout>
          </v-container>
      </v-content>
  </v-app>
</template>

<script>

import TrovimapWizard from './components/TrovimapWizard.vue'
import ParcelByAddress from './components/Address/ParcelByAddress.vue'
import BuildingUnit from './components/BuildingUnit/BuildingUnit.vue'
import EvaluationElement from './components/Evaluation/EvaluationElement.vue'

export default {
    components: {
        TrovimapWizard,
        ParcelByAddress,
        BuildingUnit,
        EvaluationElement   
    }
}
</script>

<style>
</style>