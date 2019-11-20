<template>
  <v-app>
      <v-content>
          <v-container grid-list-xs>
              <v-layout row wrap>
                  <v-flex xs12>
                    <!-- Wizard -->
                      <trovimap-wizard @evaluationCompleted="onEvaluationCompleted" >
                            <v-icon slot="success" large>
                                sentiment_satisfied
                            </v-icon>
                      </trovimap-wizard>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12>
                        <evaluation-element v-if="evaluation" :evaluation="evaluation" />
                    </v-flex>
              </v-layout>
          </v-container>
      </v-content>
  </v-app>
</template>

<script>

import TrovimapWizard from './components/TrovimapWizard.vue'
// import ParcelByAddress from './components/Address/ParcelByAddress.vue'
// import BuildingUnit from './components/BuildingUnit/BuildingUnit.vue'
import EvaluationElement from './components/Evaluation/EvaluationElement.vue'

export default {
    components: {
        TrovimapWizard,
        //ParcelByAddress,
        //BuildingUnit,
        EvaluationElement   
    },
    data() {
        return {
            evaluation: null
        }
    },
    computed: {
        
    },
    methods: {
        onEvaluationCompleted(evaluation) {
            this.evaluation = evaluation
        }
    }
}
</script>

<style>
</style>