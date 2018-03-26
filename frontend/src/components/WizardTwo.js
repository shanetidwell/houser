import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {cancel, updateImageUrl} from '../redux/actions/newProperty'
import Banner from './Banner';
import './WizardTwo.css'

class WizardTwo extends Component {
    render(){
       const {cancel, updateImageUrl} = this.props;
        return (
                <div>
                    <Banner/>
                    <div className="wizard-page">
                        <div className="wizard-container">

                            <div className="new-listing-header">
                                    <span>Add New Listing</span>
                                    <Link to={'/dashboard'}><button className="cancel-button" onClick={()=>cancel()}>Cancel</button></Link>
                            </div>
                            
                            <div className="wizard-two">
                                <div className="wizard-input">
                                    <span>Image URL</span>
                                    <input type="text" className="url-input dark-green-input"value={this.props.image_url} onChange={(e)=>updateImageUrl(e.target.value)} ></input>
                                </div>
                            </div>
                            
                            <div className="previous-next-container">
                                <Link to={'/wizard/1'}><button className="darkest-green previous-button">Previous Step </button></Link>
                                <Link to={'/wizard/3'}><button className="darkest-green next-button">Next Step </button></Link>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
const mapStateToProps = (state) =>{
    const {image_url} = state.newProperty
    return {
        image_url
    }
}

export default connect(mapStateToProps,{cancel, updateImageUrl})(WizardTwo);
