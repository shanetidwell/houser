import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateDesiredRent} from '../redux/actions/newProperty';
import {addProperty} from '../redux/actions/properties';
import Banner from './Banner';


class WizardFive extends Component {
     
    
    render(){
       const {updateDesiredRent, addProperty} = this.props
       const {name, description, address, city, state, zip, image_url, loan_amount, monthly_mortgage, desired_rent} =this.props;
        return (
                <div>
                    <Banner/>        
                    <div>Desired Rent</div>
                    <input type="number" value={this.props.desired_rent} onChange={(e)=>updateDesiredRent(e.target.value)} ></input>
                   
                     
                   
                    <Link to={'/wizard/4'}><button>Previous Step </button></Link>
                    <Link to={'/dashboard'}><button onClick={()=>addProperty({name, description, address, city, state, zip, image_url, loan_amount, monthly_mortgage, desired_rent})}>Complete</button></Link>
                </div>
        )
    }
}
const mapStateToProps = (globalState)=>{
    const {name, description, address, city, state, zip, image_url, loan_amount, monthly_mortgage, desired_rent} = globalState.newProperty
    return {
        name,
        description,
        address,
        city,
        state,
        zip,
        image_url,
        loan_amount,
        monthly_mortgage,
        desired_rent
    }
}
export default connect(mapStateToProps,{updateDesiredRent, addProperty})(WizardFive);