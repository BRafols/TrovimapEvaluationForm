<template>
    <v-list-tile @click="selectParcel">
        <v-list-tile-content>
            <v-list-tile-title v-html="parcel.Id"></v-list-tile-title>
            <v-list-tile-sub-title v-html="parcel.City"></v-list-tile-sub-title>
            <v-list-tile-sub-title v-html="parcel.Province"></v-list-tile-sub-title>
            <v-list-tile-sub-title v-html="parcel.StreetName"></v-list-tile-sub-title>
            <v-list-tile-sub-title v-html="parcel.StreetNumber"></v-list-tile-sub-title>
            <v-list-tile-sub-title v-html="parcel.StreetType"></v-list-tile-sub-title>
        </v-list-tile-content>
    </v-list-tile>
</template>

<script>
export default {
    props: {
        parcel: {
            type: Object,
            required: true,
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