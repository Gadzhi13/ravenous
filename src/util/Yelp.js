export default class YelpAPI {
    apiKey = '78FQpRUb7ogVk7gEyNKKs6dw-JSQ0v9IRrHKaRoXSwTVswZo7DoQfFGp_IOd65fnzcd4VPZ4OGxXvh0hVOmWFjZdPAww7UjjefqSTpuWMD6ZdxrZftYCNM9mtga3XnYx'
    url = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search'
    getPlacesByLocation = async (term, loc, sortBy) => {
        const endpoint = this.url + '?location=' + loc + '&term=' + term + '&sort_by=' + sortBy
        const bearerKey = 'Bearer ' + this.apiKey
        const headers = {'Authorization': bearerKey}
        const requestOptions = {
            method: 'GET',
            headers: headers
        }
        try {
            const response = await fetch(endpoint, requestOptions)
            console.log("yelpApi fetch done against - " + endpoint)
            const responseJson = await response.json()
            const businessesJson = await responseJson.businesses
            return businessesJson
        } catch (e) {
            console.log("Error! - " + e)
        }
    }
}
