import React, {Component} from "react";
import './../css/MyAccount.css'
import MyProfileComponent from "./MyProfileComponent";
import SidebarComponent from "./SidebarComponent";

class MyAccountComponent extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    
    componentWillMount() {
    }

    // findUser(){
    //   Auth.currentAuthenticatedUser({bypassCache: true})
    //   .then(user => {
    //     this.setState({
    //         authData: user,
    //         authState: 'signedIn',
            
    //         nickname: user.attributes.nickname ? user.attributes.nickname : '',
    //         email:user.attributes.email ? user.attributes.email : '',
    //         given_name: user.attributes.given_name ? user.attributes.given_name : '',
    //         middle_name: user.attributes.middle_name ? user.attributes.middle_name : '',
    //         family_name: user.attributes.family_name ? user.attributes.family_name : '',
    //         birthdate: user.attributes.birthdate ? user.attributes.birthdate : '',
    //         gender: user.attributes.gender ? user.attributes.gender : '',
    //         phone_number: user.attributes.phone_number ? user.attributes.phone_number : '',
    //         address: user.attributes.address ? user.attributes.address : '',
    //         website: user.attributes.website ? user.attributes.website : '',
            
    //         stateFromStorage: true
    //     });

    //       console.log(this.state.authData.nickname);
    //   }).catch(e => {
    //     this.setState({authState: 'signIn'});
    //   });
    // }    
    
    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value });
    }
    
    // handleSubmit = () => {
    //     Auth.updateUserAttributes(this.state.authData,{
    //         'nickname': this.state.nickname,
    //         'email':this.state.email,
    //         'given_name':this.state.given_name,
    //         'middle_name':this.state.middle_name,
    //         'family_name':this.state.family_name,
    //         'birthdate':this.state.birthdate,
    //         'gender':this.state.gender,
    //         'phone_number':this.state.phone_number,
    //         'address':this.state.address,
    //         'website':this.state.website,
    //     }).catch(e => { 
    //         console.log('Error updating user: '); 
    //         console.log(e); 
    //     });
    // }

    render(){
        
        // let loading = true;
        // if(this.state.authData) { loading = false; } 
        
        // const {nickname,email,given_name,middle_name,family_name,birthdate,gender,phone_number,address,website} = this.state;
        
        return(

            <div className="page-page">
                    <SidebarComponent/>
                    <MyProfileComponent/>
            </div>
        );
    }

}

export default MyAccountComponent