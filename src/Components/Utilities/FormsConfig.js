

import React, { Component } from 'react';
import { render } from 'react-dom';
import './../tailwind.min.css';
import './../Form.css';


//use the fire.js and add in your firebase account information
import firebase from '../firebase.js';


class Signup extends Component {
    constructor() {
        super();

        this.state = {
            shoppingList: [],
            isLoading: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.updateShoppingList = this.updateShoppingList.bind(this);
    }



    //   componentWillMount() {

    //       console.log("Connecting to firebase");

    //     //   //allow your app to sign in anonomously
    //     //   firebase.auth().signInAnonymously().catch(function(error) {
    //     //       // Handle Errors here.
    //     //       var errorCode = error.code;
    //     //       var errorMessage = error.message;
    //     //       // ...
    //     //   });

    //       //call update ShoppingList
    //     //   this.updateShoppingList();

    //   }

    updateShoppingList() {

        var temp = []
        console.log("in update shopping list");
        this.state.shoppingList.forEach(abc => {
            if (abc.checked) {
                temp.push(abc.name);
            }
            console.log(abc);
        });

        //The following code get a particular table
        const shoppingListDB = firebase.database().ref("Shopping List");
        console.log(temp);
        shoppingListDB.set(temp);
        this.setState({ isLoading: false });
        // //Store content of the database into an array to be used
        // //to set the state later.
        // const shoppingListTemp = [];

        // //Get shoppingList from the DB and add it to the local list.
        // shoppingListDB.on('value', snapshot => {

        //   snapshot.forEach(childSnapShot => {
        //     //console.log( childSnapShot.key + " : "  + childSnapShot.val());
        //     const item = 
        //     {
        //         number: childSnapShot.key,
        //         name: childSnapShot.val(),
        //         checked : false
        //     }

        //     //Add an item object to the shoppingListTemp Array
        //     shoppingListTemp.push(item);
        //   });

        //   //set the shoppingLItemTemp Array to the state shoppingList, and load to false
        //   this.setState({ shoppingList: shoppingListTemp, isLoading: false });
        // });
    }


    //This is called when your type something in the form for the key
    handleInputChange(event) {

        console.log(event.target.value)
        console.log(event.target.checked)
        //console.log( "value: " + event.target.value + " checked: " + event.target.checked);
        console.log(this.state.shoppingList);

        //search list for the id number, if there is a match set checked variable
        for (const each of this.state.shoppingList) {
            console.log(each);
            if (event.target.value == each.number)
                each.checked = event.target.checked;
        }

        this.setState({ shoppingList: this.state.shoppingList });
    }

    





    //Reset Shopping List
    handleReset() {

        //reset shopping list.
        //console.log("reset");
        //Get shoppingList from the DB and remove it
        const shoppingListDB = firebase.database().ref("Shopping List");
        shoppingListDB.remove();

        //Add new shopping List
        const shoppingListItem = firebase.database().ref("Shopping List");
        const items =
        {
            0: "Milk",
            1: "Cereal",
            2: "Apple Juice",
            3: "third",

        }
        
        shoppingListItem.set(
            items
            
        );
        const shoppingListTemp = []
        for (var i = 0; i <= 3; i++) {
            const item =
            {
                number: i,
                name: items[i],
                checked: false
            }

            //Add an item object to the shoppingListTemp Array
            shoppingListTemp.push(item);
        }

        this.setState({ shoppingList: shoppingListTemp });

        this.setState({ isLoading: true });
        this.updateShoppingList();

    }

    render() {
        //when data is being loaded
        if (this.state.isLoading) {
            return (
                <div>
                    loading...
                </div>
            );
        }

        //when the data is loaded, then do the following
        return (
            <div>


                <div class="text-gray-700 body-font relative">
                    <div class="container  py-5 mx-auto">
                        <div class="flex flex-col text-center w-full mb-6">
                            <h1 class="sm:text-3xl text-2xl  font-medium title-font pb-2 font-bold text-gray-100">Sign up for a class😄</h1>

                            {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p> */}
                        </div>

                        <div class="lg:w-1/2 md:w-2/3 mx-auto">
                            
                            <div class="flex flex-wrap -m-2">
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
                                                    <button class="bg-blue-500 hover:bg-blue-400 item-center text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={this.handleReset}>Show Courses</button>
                            <br /><br />
                                                    <div data-toggle="buttons" class="btn-group bizmoduleselect mt-2 lg:w-1/3">


                                                        <div class="btn-group bizmoduleselect mt-2 lg:w-1/3">
                                                            {
                                                                this.state.shoppingList.map((item) =>

                                                                    <label class="btn btn-default mx-1  rounded">
                                                                        <div class="bizcontent  py-2" id="bizcontent">
                                                                            <input type="checkbox" value={item.number} onClick={this.handleInputChange} checked={item.checked} /> {item.name} 
                                                                           
                                                                        </div></label>

                                                                )
                                                            }
                                                        </div></div>

                                                    <br /><br />
                                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={this.updateShoppingList} > Checked</button>
                                                    <br /><br />


                                                </div></div></div></div></div></div>
                        </div></div></div></div>
        );
    }
}

export default Signup;
