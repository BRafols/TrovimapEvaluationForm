import Vue from 'vue'

const SET_PARCELS = (state, data) => {
    Vue.set(state, 'parcels', data)
}

const SET_BUILDING_UNITS = (state, data) => {
    Vue.set(state.buildingUnits, data.Id, data.Apartments)
}

export default {
    SET_PARCELS,
    SET_BUILDING_UNITS
}