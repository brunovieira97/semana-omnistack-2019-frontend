import axios from 'axios';

const api = axios.create({
	baseURL: 'https://bvieira-rocketbox-backend.herokuapp.com'
});

export default api;
