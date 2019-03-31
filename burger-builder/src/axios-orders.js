import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-burger-builder-4d38d.firebaseio.com/'
})

export default instance