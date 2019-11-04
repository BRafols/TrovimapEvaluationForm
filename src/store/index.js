import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

console.log(mutations)

const createModule = () => {
    console.log('createModule')
    return {
        namespaced: true,
        state: {
            parcels: [
                {
                    City: "BARCELONA",
                    CityId: 900,
                    DistrictId: 8,
                    Id: "SXBNaEJyVnc2aTM4cDRtMGVMR3hjcHRpK3N0VGFTOXhUNEZaRkt5azk3dWFJT1NRMVFIbHpxbnNPcktQY21QOG82ZkZobFZjTGFBdzkxejdYTi9WeEprNjg3UFdQd1JlOEVOVHpJbTducGFqSi9mSzRWOVc3V1FlSXc1dHBicUV0WHFPNnNUVmptOXBOWFBkVEMrNU1XVEtFakthbGJyV01ub2xUSzBYZWN3PQ==",
                    Location: {
                        lat: 41.37892301375468, 
                        lon: 2.176777468274225
                    },
                    Province: "BARCELONA",
                    StreetName: "PASAJE ESCUDELLERS 7, 08002, BARCELONA, BARCELONA",
                    StreetNumber: "7",
                    StreetType: "PASAJE",
                }
            ],
            buildingUnits: {}
        },
        actions: {
            ...actions
        },
        mutations: {
            ...mutations
        }
    }
}

const createStore = () => {
    return new Vuex.Store({
        state: {},
        actions: {},
        mutations: {},
        modules: {
            trovimap: createModule()
        }
    })
}

export {
    createModule,
    createStore
}