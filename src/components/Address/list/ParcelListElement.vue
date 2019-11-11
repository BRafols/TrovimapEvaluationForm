<template>
    <v-list-tile @click="$emit('click')" :class="active === parcel.Id ? 'grey' : ''">
        <v-list-tile-content>
            <v-list-tile-title v-html="parcel.StreetName"></v-list-tile-title>
            <v-list-tile-sub-title>
                {{ parcel.City }}, {{ parcel.Province }}
            </v-list-tile-sub-title>
        </v-list-tile-content>
    </v-list-tile>
</template>

<script>
export default {
    props: {
        parcel: {
            type: Object,
            required: true,
        },
        active: {
            required: true,
            validator: prop => typeof prop === 'string' || prop === null
        }
    },
    methods: {
        selectParcel() {
            this.$store.dispatch('trovimap/FETCH_BUILDING_UNITS_BY_PARCEL', this.parcel.Id)
        }
    }
}
</script>

<style>
</style>