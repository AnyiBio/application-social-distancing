import axios from 'axios';

export function sendImg(img, config) {
    return axios.post(`${process.env.REACT_APP_BACKEND_URL}`, img, config);
}
  