import Vue from 'vue'

const SET_PARCELS = (state, data) => {
    Vue.set(state, 'parcels', data)
}

const SET_BUILDING_UNITS = (state, data) => {
    Vue.set(state.buildingUnits, data.Id, data.Apartments)
}

const SET_APARTMENT = (state, data) => {
    const { apartmentId } = data
    Vue.set(state.evaluations, apartmentId, data)
}

export default {
    SET_PARCELS,
    SET_BUILDING_UNITS,
    SET_APARTMENT
}