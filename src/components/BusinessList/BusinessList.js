import  React from "react"
import "./BusinessList.css"
import Business from "../Business/Business"

export default class BusinessList extends React.Component {
    render() {
        console.log("From Business List Component")
        console.log(this.props.businesses)
        return (
            <div className="BusinessList">
            {this.props.businesses ? this.props.businesses.map(b => <Business business={b} key={b.alias} />) : []}
            </div>
        );
    }
}