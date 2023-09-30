import React from 'react'
import 'bulma/css/bulma.min.css';
import { useState, useRef } from 'react';

function NewEventModal() {

    const [inputs, setInputs] = useState({});
    const modalRef = useRef(null); //this will get the div with class 'modal' because I need to access it to add the "is-active" class to actually make it visible


    const openModal = () => {
        const modalElement = modalRef.current;
        // the line below makes sure the modal is properly in the ref cause we can't run stuff on a null object (look at useRef instantiation at the top of this file)
        if(modalElement){
            modalElement.classList.add('is-active');
        }
    }

    const closeModal = () => {
        const modalElement = modalRef.current;
        // the line below makes sure the modal is properly in the ref cause we can't run stuff on a null object (look at useRef instantiation at the top of this file)
        if(modalElement){
            modalElement.classList.remove('is-active');
        }
    }

    // handle submits
    const handleSubmit = (event) => {
        event.preventDefault();
        
        // !send object information to backend (to be stored in DB or whatever)


    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // this is a spread operator - it creates a copy of the current inputs state which would looks something like this when the user is editing {eventName: "som", eventTime: "5:00am", eventLocation: "1232 some stre"}
        // whenever a user updates one of the fields (like they are actively typing) the function within the spread operator (values references the current state (i.e. the object above)) the function creates a copy of those values and replaces any fields with the new user update values
        // this handleChange function runs everytime the user adds or deletes text in the inputs
        setInputs(values => ({...values, [name]: value}))
    }


  return (

    <div style={{display:"flex", height:"100vh",justifyContent:"center", alignItems:"center"}}>
    <div class="modal" ref={modalRef} >
        <div class="modal-background" onClick={closeModal}></div>
        <div class="modal-content">

            <div class="box">
                
                <form onSubmit={handleSubmit}>

                    <div class="field">
                        <label class="label">Name Your Event
                        <div class="control">
                            <input 
                                class="input" 
                                type="text" 
                                placeholder="e.g. John's Birthday" 

                                name="eventName"
                                value={inputs.eventName || ""}
                                onChange={handleChange}
                            />
                        </div>
                        </label>
                    </div>
                    
                    <div class="field">
                        <label class="label">Event Time
                        <div class="control">
                            <input 
                                class="input" 
                                type="text" 
                                placeholder="e.g. 6:00 pm" 

                                name="eventTime"
                                value={inputs.eventTime || ""}
                                onChange={handleChange}
                            /> 
                            {/*make this a time picker - will need to install React time picker component */}
                        </div>
                        </label>
                    </div>

                    <div class="field">
                        <label class="label">Event Location
                        <div class="control">
                            <input 
                                class="input" 
                                type="text" 
                                placeholder="e.g. 12321 Seasame Street" 

                                name="eventLocation"
                                value={inputs.eventLocation || ""}
                                onChange={handleChange}
                            />
                        </div>
                        </label>
                    </div>

                    {/*Add option to invite other people here*/}
                    <button type="submit" class="button is-success" onClick={closeModal}>Create</button>
                </form>


            </div>


        </div>
        <button class="modal-close is-large" aria-label="close" onClick={closeModal}></button>
    </div>

    {/*Button that will open the Modal*/}
    <button onClick={openModal} class="button is-primary">+ Create a New Event</button>
    </div>
  )
}

export default NewEventModal