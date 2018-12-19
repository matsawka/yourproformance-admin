import React from 'react';
import firebase from '../firebase/firebase';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onFormSubmit(e) {
        e.preventDefault();
        var div = document.getElementById('datarecord');
        div.innerHTML = "";
        //get values from form
        const recordID = e.target.elements.searchRecord.value.trim();
        var data = "";
        console.log('click:' + recordID);
        var db = firebase.firestore();
        //592ff1bc-3ac6-461c-9e21-2d2429eff92f
        var docRef = db.collection("users").doc(recordID);
            docRef.get().then(function(doc) {
                if (doc.exists) {
                    data = doc.data();
                    console.log('1: ' + Object.entries(data));

                    
                    Object.entries(data).forEach(([key, val]) => {
                        div.innerHTML += `<div class="col-12 col-sm-4"><b>${key}</b> </div>`;
                        
                        if(typeof(val) !== 'object') {
                            div.innerHTML += `<div class="col-12 col-sm-6">${val}</div>`;
                            <div class="col-12 col-sm-2"><button className="button editbutton">Edit</button></div>
                        }
                        else { 
                            //object in object extraction
                            div.innerHTML += `<div class="col-12 col-sm-6"></div>`;
                             Object.entries(val).forEach(([key, val]) => {
                                div.innerHTML += `<div class="col-12 col-sm-4">&nbsp;&nbsp;&nbsp;<b>${key}</b> </div>`;
                                div.innerHTML += `<div class="col-12 col-sm-6">${val} </div>`;
                                //<div class="col-12 col-sm-2"><button className="button editbutton">Edit</button></div>
                            });
                            



                           
                        }   
                    });
                } else {
                    // doc.data() will be undefined in this case
                    div.innerHTML = `No such document!`;
                }
            }).catch(function(error) {
                div.innerHTML = `Error getting document: ${error}`;
            });
        }
         
    render() {
        return (
        <div>
            <div className="container">
                <form onSubmit={this.onFormSubmit}>
                <div className="row">
                    <div className="col-12 col-sm-6">
                    <b><label id="firstName_validation">Search Record:</label></b><br/>
                    <input className="add-option__input" type="text" name="searchRecord"/>
                    </div>
                </div>
                <button className="button">Continue</button>
                </form>
                <div id="datarecord" className="row"></div>
        </div> 
        </div>
      );
    }
   }