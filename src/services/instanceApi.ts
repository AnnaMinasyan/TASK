import axios from 'axios';
import Keys from './keys';

const instanceApi = axios.create({
	baseURL: Keys.BASE_URL,
});
export default instanceApi;
