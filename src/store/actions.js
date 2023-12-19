import axios from "axios";
export default {
    authRequest ({commit}, data) {
        axios.post('http://localhost:88/clone/admin/login', data)
        .then(response => {
            console.log("success",response.data)
            commit('USER_INFO', response.data)
        })
        .catch(error => {
            console.log("errrr",error)
        })
    },

    selectUser({commit}, params){
        console.log('ssss', params)
        axios.get('https://reqres.in/api/users?',{params}).then((response)=>{
            commit('SET_USER', response.data)
    })
            .catch(error => {
            console.log("errrr",error)
        })
  }
}