import axios from 'axios';

const KEY = "AIzaSyCwznkAnqltFx6SfnRNhJVurN4uBl15xLU";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: { 
        part: 'snippet', 
        maxResults: 5,
        key: KEY,
    }
});