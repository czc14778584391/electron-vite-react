import request from '@/utils/request'
  export default {
  getUserInfo() {
    return request.get('/users/getUserInfo')
  },
}