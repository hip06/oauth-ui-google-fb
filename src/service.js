import axios from 'axios'

export const apiLoginSuccess = (id) => new Promise(async (resolve, reject) => {
    try {
        let response = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_SERVER_URL}/api/v1/auth/login-success?id=${id}`,
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
