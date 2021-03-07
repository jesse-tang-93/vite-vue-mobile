import { createStore } from "vuex"

export default createStore({
    state:{
        listData: {1:10},
        num:10
    },
    mutations:{
        setData(state, value){
            state.listData = value
        },
        addNum(state, value){
            state.num ++
        }
    },
    actions:{
        setData(context, value){
            context.commit('setData',value)
        }
    },
    modules:{}
})