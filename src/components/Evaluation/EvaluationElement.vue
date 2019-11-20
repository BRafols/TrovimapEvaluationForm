<template>
    <v-layout row wrap>
      <v-flex 
        xs12
        v-if="evaluation"
      >
            <v-layout row wrap py-3>
                <v-flex xs6 text-sm-left>
                    <h4 class="subheading mb-0">Precio minimo: {{ evaluation.troviValue - evaluation.troviValue * 0.10 }} €</h4>    
                </v-flex>
                <v-flex xs6 text-sm-right>
                    <h4 class="subheading mb-0 grey--text"> Precio máximo: {{ evaluation.troviValue+ evaluation.troviValue * 0.10 }} €</h4>
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
                            lat: evaluation.Location.lat,
                            lng: evaluation.Location.lon
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
      </v-flex>
  </v-layout>
</template>

<script>

import PriceEvolution from './History/PriceEvolution.vue'
import Comparable from './Comparable.vue'

export default {
    props: {
        evaluation: {
            type: Object,
            required: true
        },
    },
    data() {
      return {

      }  
    },
    components: {
        PriceEvolution,
        Comparable
    },
    computed: {
        priceItems() {
            const countFilter = parseInt(this.evaluation.historicalStats.aggregations.length / 7, 10)
            
            return this.evaluation.historicalStats.aggregations
                .filter((agregation, index, arr) => {
                    return (index % countFilter === 0 || index === arr.length - 1)
                })
                .map((agregation) => {
                    return {
                        value: parseInt(agregation.pricem2.avg * this.evaluation.LivingArea, 10),
                        date: agregation.date
                    }
                })
        }
    }
}
</script>

<style>
.vue-street-view-pano-container {
  height: 50vh;
}
</style>