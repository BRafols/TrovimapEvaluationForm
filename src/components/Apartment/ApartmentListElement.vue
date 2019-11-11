<template>
    <v-list-tile @click="$emit('click')" actions :class="active === apartment.Id ? 'grey' : ''">
        <v-list-tile-content>
            <v-list-tile-title v-html="apartment.FormattedAddress"></v-list-tile-title>
            <v-list-tile-sub-title>
                Piso: {{ apartment.Floor }} | Puerta {{ apartment.Door }} | construcción: {{ apartment.YearBuilt }} | m2: {{ apartment.LivingArea }}
            </v-list-tile-sub-title>
            <v-list-tile-sub-title>
                Referencia catastral: <b>{{ apartment.CadastralReference }}</b>
            </v-list-tile-sub-title>
        </v-list-tile-content>
    </v-list-tile>
</template>

<script>
export default {
     props: {
        apartment: {
            type: Object,
            required: true
        },
        active: {
            required: true,
            validator: prop => typeof prop === 'string' || prop === null
        }
    },
}
</script>

<style>
</style>