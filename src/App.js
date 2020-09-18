import React, { useState } from "react";
import Nav from "./Nav";
import Home from "./Home"
import Pizza from "./Pizza";
import schema from './formSchema'
import * as yup from 'yup'
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios"

const initialFormValues = {
  name: "",
  size: "",
  instructions: "",
  pepperoni: false,
  pineapple: false,
  olives: false,
  bacon: false,
}

const initialFormErrors = {
  name: "",
  size: "",
  instructions: "",
  pepperoni: false,
  pineapple: false,
  olives: false,
  bacon: false,
}


const App = () => {

  // initialize the form in state
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ formErrors, setFormErrors ] = useState(initialFormErrors)


  // Submit functionality
  function onSubmit(event) {
    event.preventDefault()

    axios.post('https://reqres.in/api/unknown', formValues)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
      debugger
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
  }



  function validation(name, value) {
    yup.reach(schema, name).validate(value).then(res => {
      setFormErrors({...formErrors, [name]: ""})
    })
    .catch(err => {
      setFormErrors({...formErrors, [name]: err.message})
    })
  }

  function updateForm(inputName, inputValue) {
    validation(inputName, inputValue)
    setFormValues({...formValues, [inputName]: inputValue})
  }



  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/pizza">
          {/* We can pass all needed props into <Pizza propName={passedProp}/> */}
          <Pizza formValues={formValues} updateForm={updateForm} onSubmit={onSubmit} />
          <p className="error">{formErrors.name}</p>
        </Route>
        </Switch>
      </div>
    </Router>
  );
};


export default App;
