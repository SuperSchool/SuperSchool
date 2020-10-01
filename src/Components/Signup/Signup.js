import React, { Component } from 'react';
import { register } from '../Utilities/register';

class Signup extends Component {

    constructor(props) {
        super(props);
    // Checkbox Initial State
    this.state = {
        name: '',
        age: '',
        email: '',
        phone_number: '',
        isApple: false,
        isOrange: false,
        isBanana: false,
        isCherry: false,
        isAvocado: false
    };


    this.signup = this.signup.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onAgeChange = this.onAgeChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onNumberChange = this.onNumberChange.bind(this);
    this.onChangeApple = this.onChangeApple.bind(this);
    this.onChangeAvocado = this.onChangeAvocado.bind(this);
    this.onChangeBanana = this.onChangeBanana.bind(this);
    this.onChangeCherry = this.onChangeCherry.bind(this);
    this.onChangeOrange = this.onChangeOrange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    signup (){
    
        console.log("in Signup");
        console.log(this.state.email) 
        const a = register(this.state.email, this.state.name, this.state.age, this.state.phone_number, this.state.isSpace, this.state.isApple, this.state.isOrange, this.state.isBanana, this.state.isCherry, this.state.isAvocado, this)
    }

    onNameChange(e) {
        this.setState({
            name: e.target.value,
        });
    }

    onAgeChange(e) {
        this.setState({
            age: e.target.value,
        });
    }

    onEmailChange(e) {
        this.setState({
            email: e.target.value,
        });
    }

    onNumberChange(e) {
        this.setState({
            phone_number: e.target.value,
        });
    }

    // React Checkboxes onChange Methods
    onChangeApple = () => {
        this.setState(initialState => ({
            isApple: !initialState.isApple,
        }));
    }

    onChangeOrange = () => {
        this.setState(initialState => ({
            isOrange: !initialState.isOrange,
        }));
    }

    onChangeBanana = () => {
        this.setState(initialState => ({
            isBanana: !initialState.isBanana,
        }));
    }

    onChangeCherry = () => {
        this.setState(initialState => ({
            isCherry: !initialState.isCherry,
        }));
    }

    onChangeAvocado = () => {
        this.setState(initialState => ({
            isAvocado: !initialState.isAvocado,
        }));
    }

    // // Submit
    // onSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(this.state);
    // }

    render() {
        return (
            <div class="text-gray-700 body-font relative">
                <div class="container  py-5 mx-auto">
                    <div class="flex flex-col text-center w-full mb-6">
                        <h1 class="sm:text-3xl text-2xl  font-medium title-font pb-2 font-bold text-gray-100">Sign up for a class😄</h1>
                        {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p> */}
                    </div>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-2">

                            {/* PICK TOPICS */}
                            <form onSubmit={this.onSubmit}>
                                <div class="container">


                                    <div class="row mx-2">
                                    </div>
                                    <div class="row">
                                        <div class="form-group">
                                            <div class="searchable-container">
                                                <div class="items ">
                                                    <div class="info-block block-info clearfix">
                                                        <div class="square-box pull-left">
                                                            <span class="glyphicon glyphicon-tags glyphicon-lg"></span>
                                                        </div>
                                                        <div class="text-white">
                                                            👋 Tap the topics your children would be interested in. Pick as many as you want!
                                                </div>

                                                        <div className="form-check">
                                                            <label className="form-check-label">
                                                                <input type="checkbox" value="true"
                                                                    checked={this.state.isApple}
                                                                    onChange={this.onChangeApple}
                                                                    className="form-check-input"
                                                                />
              Apple
            </label>
                                                        </div>

                                                        <div className="form-check">
                                                            <label className="form-check-label">
                                                                <input type="checkbox" value="true"
                                                                    checked={this.state.isAvocado}
                                                                    onChange={this.onChangeAvocado}
                                                                    className="form-check-input"
                                                                />
              Avocado
            </label>
                                                        </div>

                                                        <div className="form-check">
                                                            <label className="form-check-label">
                                                                <input type="checkbox"
                                                                    checked={this.state.isBanana}
                                                                    onChange={this.onChangeBanana}
                                                                    className="form-check-input"
                                                                />
              Banana
            </label>
                                                        </div>

                                                        <div className="form-check">
                                                            <label className="form-check-label">
                                                                <input type="checkbox"
                                                                    checked={this.state.isCherry}
                                                                    onChange={this.onChangeCherry}
                                                                    className="form-check-input"
                                                                />
              Cherry
            </label>
                                                        </div>

                                                        <div className="form-check">
                                                            <label className="form-check-label">
                                                                <input type="checkbox"
                                                                    checked={this.state.isOrange}
                                                                    onChange={this.onChangeOrange}
                                                                    className="form-check-input"
                                                                />
              Orange
            </label>
                                                        </div></div>

                                                    {/* <div className="form-group">
                        <button className="btn btn-success">
                            Save
            </button>
                    </div> */}
                                                    {/* Name */}
                                                    <div class="p-2 my-2 w-full text-white">
                                                        What's your name?
                                <input class="w-full pt-2 bg-gray-100 text-black rounded-lg border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2" onChange={this.onNameChange} placeholder="Name" type="text" />
                                                    </div>

                                                    {/* Email */}
                                                    <div class="p-2 my-2 w-full text-white">
                                                        What's your email address?
                                <input class="w-full pt-2 bg-gray-100 text-black rounded-lg border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2" onChange={this.onEmailChange} placeholder="Email" type="email" />
                                                    </div>

                                                    {/* Phone number */}
                                                    <div class="p-2 my-2 w-full text-white">
                                                        What's your phone number? (Optional)
                                <input class="w-full pt-2 bg-gray-100 text-black rounded-lg border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2" onChange={this.onNumberChange} placeholder="Phone number" type="number" />
                                                    </div>

                                                    {/* Submit */}
                                                    <div class="p-2 my-2">
                                                        <button class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg" onClick={this.signup}>Sign up</button>
                                                    </div>


                                                </div></div></div></div>
                                </div>
                            </form> </div></div></div></div>

        );
    }
}

export default Signup;