import React from "react";
import axios from "axios";

class Login extends React.Component {
    // State
    state = {
        error : false,
    }

    // Construct
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Change Error State
    changeError(value) {
        this.setState({ error : value });
    }

    // Submit Handler
    handleSubmit(event) {
        event.preventDefault();
        
        // Inputs
        const email    = event.target.email.value;
        const password = event.target.password.value;

        // Check if inputs are empty
        if (!email || !password) {
            this.changeError(true); 
            return;
        }

        // Post
        const body = {
            username: email,
            password: password
        }
        const url = "https://three-points.herokuapp.com/api/login";

        axios.post(url, body)
            .then(res => {
                // Set item Local Storage Token
                const token = res.data.token;
                localStorage.setItem("token", token);

                this.changeError(false);
                this.props.onLoginComplete();
            })
            .catch(err => {
                // Show Error
                this.changeError(true);
            })
    }

    // Error Message to display
    showAlert() {
        if (this.state.error === true) {
            return (
                <div className="alert alert-danger mb-3">
                    <strong>Invalid Email or Password.</strong>
                </div>
            );
        }
    }

    render() {
        return (
            <div id="login" className="justify-content-center my-2 p-3">
                {this.showAlert()}
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group mb-3">
                        <label>Email</label>
                        <input type="text" className="form-control" name="email" placeholder="Email" />
                    </div>
                    <div className="form-group my-3">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary my-2 submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;