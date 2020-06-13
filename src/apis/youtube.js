import axios from 'axios';

const KEY = 'AIzaSyDkWu6H3nU8lqPFi53AzZIii2qwOIVxEp4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
})