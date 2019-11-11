<template>
  <v-card>
    
  
    <v-sheet color="rgba(0, 0, 0, .50)">
        <v-sparkline
          :value="values"
          color="rgba(255, 255, 255, 7)"
          height="100"
          padding="20"
          smooth
        >
          <template v-slot:label="item">
            {{ item.value }} €
          </template>
        </v-sparkline>
      </v-sheet>
      <v-flex xs12 text-xs-right>
        Evolución del precio entre el {{ dateRange.start }} y {{ dateRange.end }}
      </v-flex>
      
</v-card>
</template>

<script>
  export default {
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    computed: {
      values() {
        return this.items.map((item) => item.value)
      },
      dateRange() {
        const start = new Date(this.items[0].date)
        const end = new Date(this.items[this.items.length - 1].date)

        return {
          start: `${start.getMonth() + 1}/${start.getFullYear()}`,
          end: `${end.getMonth() + 1}/${end.getFullYear()}`,
        }
      }
    }
  }
</script>
