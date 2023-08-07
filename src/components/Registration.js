import React from 'react';
import mystyle from './mystyle.css';

const Registration =(props)=>{

    return(
       <div className = "container-fluid form-control container-form">
            <h2 className='text-center'>Registration Form</h2>
            
            <hr/>
            <form onSubmit={props.submit}>
                <label htmlFor = "name">Name</label>
                <input type = "text" required name = "name" class = "form-control"></input>

                <label htmlFor = "email">Email</label>
                <input type = "email" required name = "email" class = "form-control"></input>

                <label htmlFor = "role">Role</label>
                <input type = "text"  required name = "role" class = "form-control"></input>

                <label htmlFor = "salary">Salary</label>
                <input type = "text" required name = "salary" class = "form-control"></input>
        
                <label htmlFor = "age">Age</label>
                <input type = "text" required  name = "age" class = "form-control"></input>

                <button type = "submit" class = "btn btn-primary mt-3 mb-4">Submit</button>

            </form>

       </div>
        
    )

}
export default Registration;