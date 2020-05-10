import React from 'react'
import './App.css'
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar'
import YelpAPI from '../../util/Yelp'

export default class App extends React.Component {

    yelpApi = new YelpAPI()

    constructor(props) {
        super(props)
        this.searchYelp = this.searchYelp.bind(this)
        this.state = {businesses: []}
    }

    searchYelp(term, location, sortBy) {
        console.log("searchYelp() triggered with: " + term + "/" + location + "/" + sortBy)
        this.yelpApi.getPlacesByLocation(term, location, sortBy).then((res) => {
            this.setState({businesses: res})
        })
    }

    render() {
        console.log("From App Component")
        console.log(this.state.businesses)
        return (
            <div className="App">
                <h1>ravenous</h1>
                <SearchBar searchYelp={this.searchYelp} />
                <BusinessList businesses={this.state.businesses} />
            </div>
        )
    }
}