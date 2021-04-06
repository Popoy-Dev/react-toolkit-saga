import axios from 'axios'

export default function getSampleUser(){
    return axios.request({
        method: 'get',
        url: "https://my-json-server.typicode.com/typicode/demo/comments",
    })
}