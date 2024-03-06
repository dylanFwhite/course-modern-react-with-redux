import axios from 'axios'

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID hk3k4b_8E9VKROyIa2TQvVlYXeK4ZpcHY7OXvzc_U-Q'
        },
        params: {
            query: term
        }
    })

    return response.data.results
}

export default searchImages