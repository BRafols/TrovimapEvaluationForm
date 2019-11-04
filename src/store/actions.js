import axios from 'axios'

const FETCH_PARCELS_BY_ADDRESS = async (context, address) => {

    const { commit } = context

    console.log('context', context)
    try {
        const result = await axios.get(`http://localhost:8080/trovi/parcel?address=${address}`)

        commit('SET_PARCELS', result.data)
        console.log('tex', address)
    } catch (e) {
        throw e
    }
}

const FETCH_BUILDING_UNITS_BY_PARCEL = async (context, parcelId) => {
    const { commit } = context

    try {
        const result = await axios.get(`http://localhost:8080/trovi/parcel/${parcelId}`)

        commit('SET_BUILDING_UNITS', result.data)
    } catch (e) {
        throw e
    }
}

export default {
    FETCH_PARCELS_BY_ADDRESS,
    FETCH_BUILDING_UNITS_BY_PARCEL
}