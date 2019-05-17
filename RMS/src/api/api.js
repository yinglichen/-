import axios from 'axios'
import { Message } from 'element-ui'
import router from '@/router/index.js'


let ua = window.navigator.userAgent.toLowerCase();
let inWeixin = ua.match(/MicroMessenger/i) == 'micromessenger';

export default {
    //参数（params）{return httpPost/httpGet('接口')，parmas}
    loginIn(params) {
        return httpGet('./../../static/data/account.json', params)
    }
}

// axios配置
axios.defaults.timeout = 30000
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'


export function httpPostJson(url, parmas) {
    axios.defaults.timeout = 30000
    axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'

    return new Promise((resolve, reject) => {
        axios.post(url, parmas).then(response => {
            if (response.data.code == '0' || response.data.code == '200') {
                let copyDate = JSON.parse(JSON.stringify(response.data))
                resolve(response.data)
            } else {
                reject(response.data)
            }
        },
            err => {
                reject(err)
                Message.error('请求超时');
            }
        ).catch(error => {
            reject(error)
            Message.error('系统错误')
        })
    })
}

// 封装get,post方法

export function httpPost(url, parmas) {
    axios.defaults.timeout = 3000
    axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    return new Promise((resolve, reject) => {
        axios.post(url, parmas).then(
            response => {
                if (response.data.code == '0' || response.data.code == '200') {
                    let copyDate = JSON.parse(JSON.stringify(response.data))
                    resolve(response.data)
                } else if (response.data.code == '401') {
                    resolve(response.data)
                } else {
                    resolve(response.data)
                }
            },
            err => {
                reject(err)
                Message.error('请求超时')
            }
        ).catch(error => {
            reject(error)
            Message.error('系统错误')
        })
    })
}

export function httpGet(url, parmas) {
    return new Promise((resolve, reject) => {
        axios.get(url, { parmas: parmas }).then(
            response => {
                if (response.data.code == '0' || response.data.code == '200') {
                    let copyDate = JSON.parse(JSON.stringify(response.data))
                    resolve(response.data) //成功后返回的结果
                }
                else if (response.data.code == '401') {
                    resolve(response.data)
                }
            }
        ).catch(error => {
            reject(error)
            Message.error('系统错误')
        })
    })
}