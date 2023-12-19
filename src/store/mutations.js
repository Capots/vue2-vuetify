export default {
    USER_INFO (state, userinfo) {
        console.log('userinfo',userinfo)
        state.userInfo = userinfo
    },
    SET_USER (state, data){
        state.user = data
  }


    
}