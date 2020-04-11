import request from './_axios.conf'

function fetch(params) {
  return new Promise((resolve, reject) => {
    request({
      url: params.url || '',
      data: { ...params.data }
    })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default fetch
