import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {getProperties} from '../redux/actions/properties';
import Property from './Property';
import Banner from './Banner';
import './Dashboard.css';


class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            grabbedProperties: false
        }
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.userInfo.id>0 && nextProps.fetchedUserInfo===true && this.state.grabbedProperties === false){
            console.log('getting here')
        this.setState({
            grabbedProperties: true
        }, () => {
            this.props.getProperties()
        })
        }
        
    }


    
    render(){
       console.log(1)
        return (
                <div>
                    <Banner/>
                    <div id="dashboard-page">
                        <div className="dashboard-container">
                            <div className="dashboard-header">
                                <span>Dashboard</span>
                                <Link to={'/wizard/1'}><button className="lightest-green add-property-button"> Add new property</button></Link>
                            </div>
                            
                            <div>Home Listings</div>
                            {/* {this.props.properties.data.map((property, index)=>{
                                return (
                                    <Property property={property} key={index}/>
                                )
                            })} */}
                            {
                                (this.props.properties.data)
                                ? 
                                this.props.properties.data.map((property, index)=>{
                                return (
                                    <Property property={property} key={index}/>
                                )
                            })
                            :
                            <div> loading </div>
                            }
                        </div>
                    </div>
                </div>

        )
    }
}
const mapStateToProps = state => {
    console.log(2, state.properties)
    return {
        properties: state.properties,
        userInfo: state.properties.userInfo,
        fetchedUserInfo: state.properties.fetchedUserInfo,
        grabbedProperties: state.properties.grabbedProperties
        
    }
}
export default connect(mapStateToProps, {getProperties})(Dashboard)