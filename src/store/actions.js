import axios from 'axios'

const FETCH_PARCELS_BY_ADDRESS = async (context, address) => {

    const { commit } = context
    try {
        const result = await axios.get(`http://localhost:8080/trovi/parcel?address=${address}`)

        commit('SET_PARCELS', result.data)
    } catch (e) {
        throw e.response
    }
}

/**
 * 
 * @param {*} context 
 * @param {*} parcelId 
 * TODO:: Fetch conditionally
 */
const FETCH_BUILDING_UNITS_BY_PARCEL = async (context, parcelId) => {
    const { commit, state } = context

    if (state.buildingUnits[parcelId]) return

    try {
        const result = await axios.get(`http://localhost:8080/trovi/parcel/${parcelId}`)

        commit('SET_BUILDING_UNITS', result.data)
    } catch (e) {
        throw e.response
    }
}

const FETCH_CHARACTERISTICS_BY_APARTMENT_ID = async (context, apartmentId) => {

    try {
        const result = await axios.get(`http://localhost:8080/trovi/apartment/${apartmentId}/characteristics`)

        const data = {
            ApartmentId: result.data.ApartmentId,
            ParcelId: result.data.ParcelId,
            CadastralReference: result.data.CadastralReference,
            Location: {
              lat: result.data.Location.lat,
              lon: result.data.Location.lon
            },
            LivingArea: result.data.LivingArea
        }

        return data
    } catch (e) {
        throw e.response
    }

}

const FETCH_EVALUATION_BY_APARTMENT_ID = async (context, data) => {
    const { commit } = context
    const { payload, apartmentId } = data


    try {

        const result = await axios.post(`http://localhost:8080/trovi/apartment/${apartmentId}`, payload)

        commit ('SET_APARTMENT', {
            ...result.data,
            apartmentId
        })
    } catch (e) {
        throw e.response
    }
}

const DOWNLOAD_EVALUATION_BY_ID = async (context, evaluationId) => {
    try {
        return await axios.get(`http://localhost:8080/trovi/evaluation/${evaluationId}`, {
            responseType: 'arraybuffer'
        })
    } catch (e) {
        throw e.response
    }
}

export default {
    FETCH_PARCELS_BY_ADDRESS,
    FETCH_BUILDING_UNITS_BY_PARCEL,
    FETCH_EVALUATION_BY_APARTMENT_ID,
    DOWNLOAD_EVALUATION_BY_ID,
    FETCH_CHARACTERISTICS_BY_APARTMENT_ID
}