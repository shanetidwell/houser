import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateDesiredRent} from '../redux/actions/newProperty';
import {cancel, updateMonthlyMortgage} from '../redux/actions/newProperty';
import {addProperty} from '../redux/actions/properties';
import Banner from './Banner';
import './WizardThree.css'


class WizardThree extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         recommendedRent: 1.25 * this.props.monthly_mortgage
    //     }
    // }
    render(){
       const {cancel, updateDesiredRent, addProperty, updateMonthlyMortgage} = this.props
       const {name, address, city, state, zip, image_url, monthly_mortgage, desired_rent} =this.props;
       
        return (
                <div>
                    <Banner/>
                    <div className="wizard-page">
                        <div className="wizard-container">
                            <div className="new-listing-header">
                                    <span>Add New Listing</span>
                                    <Link to={'/dashboard'}><button className="cancel-button" onClick={()=>cancel()}>Cancel</button></Link>
                            </div>

                            <div className="wizard-three">
                                <div className="recommended-rent">
                                    <span>Recommended Rent: ${monthly_mortgage*1.25}</span>

                                </div>
                                <div className="wizard-input">
                                    <span>Monthly Mortgage</span>
                                    <input className="mortgage-input dark-green-input" type="number" value={this.props.monthly_mortgage} onChange={(e)=>updateMonthlyMortgage(e.target.value)} ></input>
                                </div>

                                <div className="wizard-input">
                                    <span>Desired Rent</span>
                                    <input className="rent-input dark-green-input" type="number" value={this.props.desired_rent} onChange={(e)=>updateDesiredRent(e.target.value)} ></input>
                                </div>
                            </div>

                            <div className="previous-complete-container">
                                <Link to={'/wizard/2'}><button className="darkest-green previous-button">Previous Step </button></Link>
                                <Link to={'/dashboard'}><button className="lightest-green complete-button" onClick={()=>addProperty({name, address, city, state, zip, image_url, monthly_mortgage, desired_rent})}>Complete</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
const mapStateToProps = (globalState) => {
        const {name, address, city, state, zip, image_url, monthly_mortgage, desired_rent} = globalState.newProperty
    return {
        name,
        address,
        city,
        state,
        zip,
        image_url,
        monthly_mortgage,
        desired_rent
    }
}
export default connect(mapStateToProps,{cancel, updateDesiredRent, addProperty, updateMonthlyMortgage})(WizardThree)