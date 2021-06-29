import axios from 'axios'

export default function callapi(method, url, data) {
    return axios({
        method: method,
        url: url,
        data: data
    })
}