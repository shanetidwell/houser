import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {cancel, updateName, updateAddress, updateCity, updateState, updateZip} from '../redux/actions/newProperty';
import {setCreatedPropertyFalse} from '../redux/actions/properties';
import Banner from './Banner';
import './WizardOne.css'



class WizardOne extends Component {
     
    componentWillMount = ()=>{
        console.log(this.props)
        if(this.props.createdProperty){
            this.props.cancel();
            this.props.setCreatedPropertyFalse();
        }
    }
    
    render(){
        const {cancel, updateName, updateAddress, updateCity, updateState, updateZip} = this.props;
        console.log(this.props)
        return (
            
                <div>
                    <Banner/>
                    <div className="wizard-page">
                        <div  className="wizard-container">
                            <div className="new-listing-header">
                                <span>Add New Listing</span>
                                <Link to={'/dashboard'}><button className="cancel-button" onClick={()=>cancel()}>Cancel</button></Link>
                            </div>

                            <div className="input-container">
                                <div className="wizard-input">
                                    <span>Property Name</span>
                                    <input className="property-input dark-green-input" type="text" value={this.props.name} onChange={(e)=>updateName(e.target.value)}></input>
                                </div>

                                <div className="wizard-input">
                                    <span>Address</span>
                                    <input className="address-input dark-green-input" type="text" value={this.props.address} onChange={(e)=>updateAddress(e.target.value)}></input>
                                </div>

                                <div className="city-state-zip">
                                    <div className="wizard-input">
                                        <span>City</span>
                                        <input className="city-input dark-green-input" type="text" value={this.props.city} onChange={(e)=>updateCity(e.target.value)}></input>
                                    </div>
                                    <div className="wizard-input">
                                        <span>State</span>
                                        <input className="state-input dark-green-input" type="text" value={this.props.state} onChange={(e)=>updateState(e.target.value)}></input>
                                    </div>
                                    <div className="wizard-input">
                                        <span>Zip</span>
                                        <input className="zip-input dark-green-input" type="number" value={this.props.zip} onChange={(e)=>updateZip(e.target.value)}></input>
                                    </div>
                                </div>

                            </div>
                            <div className="next-button-container">
                                <Link to={'/wizard/2'}><button className="darkest-green next-button">Next Step </button></Link>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
const mapStateToProps = (globalState) =>{
    const {name, address, city, state, zip} = globalState.newProperty
    const {createdProperty} = globalState.properties
    return {
        createdProperty,
        name,
        address,
        city,
        state,
        zip
    }
}
export default connect(mapStateToProps,{setCreatedPropertyFalse, cancel, updateName, updateAddress, updateCity,updateState,updateZip})(WizardOne);