import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteProperty} from '../redux/actions/properties';
import './Property.css'


class Property extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     property: props.property
        // }
    }
    render(){
       const {deleteProperty} = this.props
       const{property} = this.props
       console.log(property)
        return (
                <div className="house-container">
                    <div>
                        <img className="house-image" src={property.image_url} alt="house"/>
                    </div>
                    <div className="house-info">
                        <span>Property Name: {property.name}</span>
                        <span>Address:{property.address}</span>
                        <span>City:{property.city}</span>
                        <span>State:{property.state}</span>
                        <span>Zip:{property.zip}</span>
                    </div>
                    <div className="house-pricing">
                        <span>Monthly Mortgage:{property.monthly_mortgage}</span>
                        <span>Desired Rent:{property.desired_rent}</span>
                    </div>
                    <button onClick={()=>deleteProperty(property.id)}>X</button>
                </div>
        )
    }
}

export default connect(null,{deleteProperty})(Property)