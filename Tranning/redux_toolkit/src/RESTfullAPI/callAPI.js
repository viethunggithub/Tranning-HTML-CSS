import axios from 'axios'

export default function callAPI(method, endpoint, data) {
    return axios({
        method: method,
        url: `https://5f4719a595646700168d8e36.mockapi.io/${endpoint}`,
        data: data
    }).catch(err => console.log(err))
}
// Hiện project đang sử dụng json-server tại port = 3000 vì mockaip đang lỗi