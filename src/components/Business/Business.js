import React from "react"
import "./Business.css"

export default class Business extends React.Component {
    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt='' />
                </div>
                <h2>{this.props.business.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{this.props.business.location.address1}</p>
                        <p>{this.props.business.location.city}</p>
                        <p>{this.props.business.location.zip_code}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{this.props.business.categories[0].title}</h3>
                        <h3 className="rating">{this.props.business.rating} stars</h3>
                        <p>{this.props.business.review_count} reviews</p>
                    </div>
                </div>
            </div>
        )
    }
}