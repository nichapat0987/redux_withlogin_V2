import React, {Component} from 'react'
import {connect} from 'react-redux'
import './PostForm.css'


class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const firstname = this.getFirstname.value;
        const lastname = this.getLastname.value;
        const data = {
            id: new Date(),
            firstname,
            lastname
        }
        /* console.log(data);*/
        this.props.dispatch({
            type: 'ADD_POST',
            data
        })
        this.getFirstname="";
        this.getLastname="";
    }
    render() {
        return (
        <div className="body-Post">
            <div className="fill-container">
          
                <h1>Fill in</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                   
                        <input type="text" className= "placeh" ref={(input) => this.getFirstname = input} placeholder="Enter your FirstName" required/>
                        <br/><br/>
                        <input type="text" className= "placeh" ref={(input) => this.getLastname = input} placeholder="Enter your LastName" required/>
           

                    <br/><br/>
                    <button className="OKbutton"><p className="textOK">OK</p></button>
                </form>

            </div>
        </div>
        )
    }
}

export default connect()(PostForm)