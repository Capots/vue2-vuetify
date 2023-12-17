import axios from "axios";
export default {

    authRequest ({commit}, { username, password }) {
        axios.post('http://localhost:92/CodeIgniter4/user', {
            username: username,
            password: password
        })
        .then(response => {
            commit('USER_INFO', response.data)
        })
    },

}