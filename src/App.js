import React from 'react';
import {Component} from 'react';
import Registration from './components/Registration';
import { v4 as uuidv4 } from 'uuid';
import  firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBjJNZNMG9wylJkMfZyRrzGZU_zZbyEaUI",
  authDomain: "registrationapp-958ee.firebaseapp.com",
  databaseURL: "https://registrationapp-958ee-default-rtdb.firebaseio.com",
  projectId: "registrationapp-958ee",
  storageBucket: "registrationapp-958ee.appspot.com",
  messagingSenderId: "369339901729",
  appId: "1:369339901729:web:fc118eae4609f3d49c8060"
};
if(firebase.app.length < 0){
    firebase.initializeApp(firebaseConfig);
}




class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      id : uuidv4(),
      isRegister:false,
      name :null,
      email:null,
      role:null,
      salary:null,
      age :null
    }
  }
  submitHandler =(event)=>{
    const name = event.target.name.value
    const email = event.target.email.value
    const role = event.target.role.value
    const salary = event.target.salary.value
    const age = event.target.age.value


    this.setState({name,email,role,salary,age,isRegister:true})

    const database = firebase.database()
    database.ref('Emp-data/'+this.state.id).set(
        {
          name:this.state.name,
          email:this.state.email,
          role: this.state.role,
          salary:this.state.salary,
          age:this.state.age
        }
      )
  }

  render(){
    return(
        <div>
          {
            this.state.isRegister ?
            {(<h2>succefully store<h2>)></Greetings>):
            (<Registration submit = {this.submitHandler}></Registration>)
          }
        </div>
      )
  }
}

export default App;