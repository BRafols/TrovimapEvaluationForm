import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

const createModule = () => {
    return {
        namespaced: true,
        state: {
            parcels: [],
            buildingUnits: {},
            evaluations: {}
        },
        actions: {
            ...actions
        },
        mutations: {
            ...mutations
        },
        getters: {
            apartmentsById: (state) => (buildingUnitId) => {
                let data = state.buildingUnits[buildingUnitId]

                if (data) {
                    return data.sort((a, b) => {
                        if (a.Floor === b.Floor) {
                            return a.Door < b.Door ? -1 : 1
                        }
                        return a.Floor < b.Floor ? -1 : 1
                    })
                }

                return data
            }
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