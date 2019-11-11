<template>
  <v-card height="100%">
      <v-img :src="comparable.PhotoUrl_320x0" height="200px">
      </v-img>
      <v-card-title primary-title>
          <v-layout row wrap>
              <v-flex xs12>
                  <h3 class="title mb-0">{{ comparable.DisplayFullStreetAddress }}</h3>
              </v-flex>
              <v-flex xs6>
                <h4 class="body-2 mb-0">{{ comparable.Price }} €</h4>    
              </v-flex>
              <v-flex xs6>
                  <h4 class="body-1 mb-0 grey--text"> {{ comparable.PriceM2 }} €/m2</h4>
              </v-flex>
          </v-layout>
      </v-card-title>
      <v-card-text>
          <v-layout row wrap>
              <v-flex xs4>
                <span>{{ comparable.LivingArea }} m2</span>  
                
              </v-flex>
              <v-flex xs4>
                  <span>{{ comparable.Bedrooms }} habs</span>
              </v-flex>
              <v-flex xs4>
                <span>{{ comparable.Bathrooms }} baños</span>  
              </v-flex>
          </v-layout>
      </v-card-text>
      <v-card-actions>
          Fecha publicación: {{ comparable.ListingDate | trovimap_date }}
      </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props: {
        comparable: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
</style>