import React from 'react';
import './../tailwind.min.css';
import './../Form.css';
import firebase from '../firebase.js';
// import { PostData } from '../services/PostData';
import { register } from '../Utilities/register';
import FinalPage from '../Finalpage/FinalPage';


class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: '',
            phone_number: '',
            isSpace: false,
            isRobots: false,
            isMagic: false,
            isArt: false,
            isMusic: false,
            isVideoGame: false,
            isStory: false,
            isDancing: false,
        }
    
        this.signup = this.signup.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onAgeChange = this.onAgeChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onNumberChange = this.onNumberChange.bind(this);
        this.onChangeSpace = this.onChangeSpace.bind(this);
        this.onChangeMagic = this.onChangeMagic.bind(this);
        this.onChangeRobots = this.onChangeRobots.bind(this);
        this.onChangeArt = this.onChangeArt.bind(this);
        this.onChangeMusic = this.onChangeMusic(this);
        this.onChangeVideo = this.onChangeVideo(this);
        this.onChangeStory = this.onChangeStory(this);
        this.onChangeDancing = this.onChangeDancing(this);

        // this.handleInputChange = this.handleInputChange.bind(this);


    }

    
    onChangeSpace = () => {
        console.log("onChanges");
        this.setState(initialState => ({
          isSpace: !initialState.isSpace,
        }));
      }
    
      onChangeRobots = () => {
        console.log("onChanges");   
        this.setState(initialState => ({
            isSpace: !initialState.isRobots,
          }));
      }
      onChangeMagic = () => {
        console.log("onChanges");
        this.setState(initialState => ({
            isSpace: !initialState.isMagic,
          }));
      }
      onChangeArt = () => {
        console.log("onChanges");
        this.setState(initialState => ({
            isSpace: !initialState.isArt,
          }));
      }
      onChangeMusic = () => {
        console.log("onChanges");
        this.setState(initialState => ({
            isSpace: !initialState.isMusic,
          }));
      }
      onChangeVideo = () => {
        console.log("onChanges");
        this.setState(initialState => ({
            isSpace: !initialState.isVideoGame,
          }));
      }
      onChangeStory = () => {
        console.log("onChanges");
        this.setState(initialState => ({
            isSpace: !initialState.isStory,
          }));
      }
      onChangeDancing = () => {
        console.log("onChanges");
        this.setState(initialState => ({
            isSpace: !initialState.isDancing,
          }));
      }
   
    signup() {
         
        console.log("in Signup");
        console.log(this.state.email) 
        const a = register(this.state.email, this.state.name, this.state.age, this.state.phone_number, this.state.isSpace, this.state.isRobots, 
            this.state.isMagic, this.state.isArt, this.state.isMusic, this.state.isVideoGame, this.state.isStory, this.state.isDancing, this)
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
    
    // handleInputChange(event) {

    //     console.log("Inside Handle Check")
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;

    //     console.log("Checkboxed");
    //     console.log(value);
    //     console.log(name);






    render() {
        return [

            <div class="text-gray-700 body-font relative">
                <div class="container  py-5 mx-auto">
                    <div class="flex flex-col text-center w-full mb-6">
                        <h1 class="sm:text-3xl text-2xl  font-medium title-font pb-2 font-bold text-gray-100">Sign up for a class😄</h1>
                        {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p> */}
                    </div>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-2">

                            {/* PICK TOPICS */}
                            <form> 
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
                                                    <div data-toggle="buttons" class="btn-group bizmoduleselect mt-2 lg:w-1/3">
                                                    

                                                        <label class="btn btn-default mx-1  rounded " >
                                                            <div class="bizcontent  py-2" id="bizcontent">
                                                                <input type="checkbox" id="checkbox" name="Space" autocomplete="off" value="Space" hidden 
                                                                checked={this.state.isSpace}
                                                                onChange={this.onChangeSpace} />
                                                                <span class="glyphicon glyphicon-ok glyphicon-lg"></span>
                                                                <p>Space</p>
                                                            </div>
                                                        </label>
                                                        <label class="btn btn-default mx-1 rounded">
                                                            <div class="bizcontent py-2 "  >
                                                                <input type="checkbox" id="Robot" name="Robots" autocomplete="off" value="Robots" hidden 
                                                                 checked={this.state.Robots}
                                                                 onChange={this.onChangeRobots}/>
                                                                <span class="glyphicon glyphicon-ok glyphicon-lg"></span>
                                                                <p>Robots</p>
                                                            </div>
                                                        </label>
                                                        
                                                        <label class="btn btn-default mx-1 rounded">
                                                            <div class="bizcontent  py-2">
                                                                <input type="checkbox" id="Magic" autocomplete="off" value="Magic" hidden 
                                                                checked={this.state.isMagic}
                                                                onChange={this.onChangeMagic} />
                                                                <span class="glyphicon glyphicon-ok glyphicon-lg"></span>
                                                                <p>Magic tricks</p>
                                                            </div>
                                                        </label>
                                                        <label class="btn btn-default mx-1 rounded">
                                                            <div class="bizcontent  py-2">
                                                                <input type="checkbox" id="Art" autocomplete="off" value="Art" hidden 
                                                                checked={this.state.isArt}
                                                                onChange={this.onChangeArt} />
                                                                <span class="glyphicon glyphicon-ok glyphicon-lg"></span>
                                                                <p>Art</p>
                                                            </div>
                                                        </label>
                                                        <label class="btn btn-default mx-1 rounded">
                                                            <div class="bizcontent py-2">
                                                                <input type="checkbox" name="Music" autocomplete="off" value="Music" hidden 
                                                                checked={this.state.isMusic}
                                                                onChange={this.onChangeMusic} />
                                                                <span class="glyphicon glyphicon-ok glyphicon-lg"></span>
                                                                <p>Music</p>
                                                            </div>
                                                        </label>
                                                    </div>

                                                </div>

                                                
                                                    <div data-toggle="buttons" class="btn-group bizmoduleselect">
                                                        <label class="btn btn-default mx-1  rounded">
                                                            <div class="bizcontent py-2" id="bizcontent">
                                                                <input type="checkbox" name="var_id[]" autocomplete="off" value="" hidden 
                                                                checked={this.state.isVideoGame}
                                                                onChange={this.onChangeVideo} />
                                                                <span class="glyphicon glyphicon-ok glyphicon-lg"></span>
                                                                <p>Video Game coding</p>
                                                            </div>
                                                        </label>

                                                        <label class="btn btn-default mx-1 rounded">
                                                            <div class="bizcontent py-2">
                                                                <input type="checkbox" name="var_id[]" autocomplete="off" value="" hidden 
                                                                checked={this.state.isStory}
                                                                onChange={this.onChangeStory} />
                                                                <span class="glyphicon glyphicon-ok glyphicon-lg"></span>
                                                                <p>Story writing</p>
                                                            </div>
                                                        </label>
                                                        <label class="btn btn-default mx-1 rounded">
                                                            <div class="bizcontent py-2">
                                                                <input type="checkbox" name="var_id[]" autocomplete="off" value="" hidden 
                                                                checked={this.state.isDancing}
                                                                onChange={this.onChangeDancing} />
                                                                <span class="glyphicon glyphicon-ok glyphicon-lg"></span>
                                                                <p>Dancing</p>
                                                            </div>
                                                        </label>

                                                    </div>

                                                
                                                
                                                    {/* <div data-toggle="buttons" class="btn-group bizmoduleselect">
                                                        <label class="btn btn-default mx-1  rounded">
                                                            <div class="bizcontent py-2" id="bizcontent">
                                                                <input type="checkbox" name="var_id[]" autocomplete="off" value="" hidden />
                                                                <span class="glyphicon glyphicon-ok glyphicon-lg"></span>
                                                                <p>Reading</p>
                                                            </div>
                                                        </label>
                                                        <label class="btn btn-default mx-1 rounded">
                                                            <div class="bizcontent py-2">
                                                                <input type="checkbox" name="var_id[]" autocomplete="off" value="" hidden />
                                                                <span class="glyphicon glyphicon-ok glyphicon-lg"></span>
                                                                <p>Human Body</p>
                                                            </div>
                                                        </label>
                                                        <label class="btn btn-default mx-1 rounded">
                                                            <div class="bizcontent py-2">
                                                                <input type="checkbox" name="var_id[]" autocomplete="off" value="" hidden />
                                                                <span class="glyphicon glyphicon-ok glyphicon-lg"></span>
                                                                <p>Dinosaurs</p>
                                                            </div>
                                                        </label>
                                                        <label class="btn btn-default mx-1 rounded">
                                                            <div class="bizcontent py-2">
                                                                <input type="checkbox" name="var_id[]" autocomplete="off" value="" hidden />
                                                                <span class="glyphicon glyphicon-ok glyphicon-lg"></span>
                                                                <p>Yoga</p>
                                                            </div>
                                                        </label>
                                                        <label class="btn btn-default mx-1 rounded">
                                                            <div class="bizcontent py-2">
                                                                <input type="checkbox" name="var_id[]" autocomplete="off" value="" hidden />
                                                                <span class="glyphicon glyphicon-ok glyphicon-lg"></span>
                                                                <p>History</p>
                                                            </div>
                                                        </label>
                                                    </div>

                                                
                                                
                                                    <div data-toggle="buttons" class="btn-group bizmoduleselect">
                                                        <label class="btn btn-default mx-1  rounded">
                                                            <div class="bizcontent py-2" id="bizcontent">
                                                                <input type="checkbox" name="var_id[]" autocomplete="off" value="" hidden />
                                                                <span class="glyphicon glyphicon-ok glyphicon-lg"></span>
                                                                <p>Extreme Weather</p>
                                                            </div>
                                                        </label>
                                                        <label class="btn btn-default mx-1 rounded">
                                                            <div class="bizcontent py-2">
                                                                <input type="checkbox" name="var_id[]" autocomplete="off" value="" hidden />
                                                                <span class="glyphicon glyphicon-ok glyphicon-lg"></span>
                                                                <p>Machines</p>
                                                            </div>
                                                        </label>
                                                        <label class="btn btn-default mx-1 rounded">
                                                            <div class="bizcontent py-2">
                                                                <input type="checkbox" name="var_id[]" autocomplete="off" value="" hidden />
                                                                <span class="glyphicon glyphicon-ok glyphicon-lg"></span>
                                                                <p>Animals</p>
                                                            </div>
                                                        </label>

                                                    </div> */}

                                                
                                            </div>

                                        </div>
                                    </div>
                                </div>



                            </div>


                            {/* PICK TOPICS ENDS */}

                    
                            {/* AGE GROUP */}
                            {/* <div class="row mx-2 pt-4">
                                    <div class="form-group">
                                        <div class="searchable-container">
                                            <div class="items ">
                            <div class="info-block block-info clearfix">
                                                    <div class="square-box pull-left">
                                                        <span class="glyphicon glyphicon-tags glyphicon-lg"></span>
                                                    </div>
                                                    <div class="text-white">
                                                        👋 Tap the Age group your child belongs to!
                                                    </div>
                                                    <div data-toggle="buttons" class="btn-group bizmoduleselect mt-2 lg:w-1/3">

                                                        <label class="btn btn-default mx-1  rounded">
                                                            <div class="bizcontent px-2  py-2" id="bizcontent">
                                                                <input type="radio" name="var_id1[]" autocomplete="off" value="" hidden />
                                                                <span class="glyphicon glyphicon-ok glyphicon-lg"></span>
                                                                <p >3-5 Years</p>
                                                            </div>
                                                        </label>
                                                        <label class="btn btn-default mx-1 rounded">
                                                            <div class="bizcontent px-2 py-2">
                                                                <input type="radio" name="var_id1[]" autocomplete="off" value="" hidden />
                                                                <span class="glyphicon glyphicon-ok glyphicon-lg"></span>
                                                                <p>6-8 Years</p>
                                                            </div>
                                                        </label>
                                                        <label class="btn btn-default mx-1 rounded">
                                                            <div class="bizcontent px-2  py-2">
                                                                <input type="radio" name="var_id1[]" autocomplete="off" value="" hidden />
                                                                <span class="glyphicon glyphicon-ok glyphicon-lg"></span>
                                                                <p>9-11 Years</p>
                                                            </div>
                                                        </label>
                                                        <label class="btn btn-default mx-1 rounded">
                                                            <div class="bizcontent px-2 py-2">
                                                                <input type="radio" name="var_id1[]" autocomplete="off" value="" hidden />
                                                                <span class="glyphicon glyphicon-ok glyphicon-lg"></span>
                                                                <p>12 and older</p>
                                                            </div>
                                                        </label>
                                                        
                                                    </div>

                                                </div></div></div></div></div> */}

                            {/* AGE GROUP ENDS */}



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
                            </form>
                            {/* Submit */}
                            <div class="p-2 my-2">
                            <a href='/FinalPage'> <button class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg" onClick={this.signup}>Sign up</button></a>
                            </div>

                            {/* <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"> 
                                 <a class="text-green-500">example@email.com</a>
                                <p class="leading-normal my-5">49 Smith St.
                      <br />Saint Cloud, MN 56301
                    </p>
                                <span class="inline-flex">
                                    <a class="text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a class="ml-4 text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a class="ml-4 text-gray-500">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </a>
                                    <a class="ml-4 text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        ];
    }
}
export default Form;