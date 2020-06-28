import React, {Component} from 'react';
import './styles.scss'
import Button from "../forms/Button";
import {auth, signInWithGoogle} from "../../firebase/utils";
import FormInput from "../forms/FormInput";


const initialState={
    email: '',
    password: '',
    errors: []
}

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state ={
            ...initialState
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit = async e =>{
        e.preventDefault()
        let {email, password, errors} = this.state



        try{
            await  auth.signInWithEmailAndPassword(email, password)
            this.setState({
                ...initialState
            })
        }catch (err) {

        }
    }

    handleChange(e) {
        const {name, value} = e.target

        this.setState({
            [name]: value
        })
    }

    render() {
        const {email, password,errors} = this.state
        return (
            <div className="signin">
                <div className="wrap">
                    <h2>
                        LogIn
                    </h2>
                    <div className="formWrap">
                        <form action="" onSubmit={this.handleSubmit}>

                            <FormInput
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Email"
                                handleChange={this.handleChange}
                            />
                            <FormInput
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Password"
                                handleChange={this.handleChange}
                            />

                            <Button type="submit ">
                                sign in
                            </Button>

                            <div className="socialSignIn">
                                <div className="row">
                                    <Button onClick={signInWithGoogle}>
                                        Sign in with Google
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;