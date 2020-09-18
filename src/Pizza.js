import React from "react";

const Pizza = (props) => {

  const { formValues, updateForm, onSubmit } = props

  function onChange(evt) {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    updateForm(name, valueToUse);
  }


  return (
    <div className="centered">
      <h1>Pizza Page</h1>
      <p>Time to order pizza</p>

      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input 
          type="text"
          name="name"
          value={formValues.name}
          onChange={onChange}
          />
          <br />
        </label>

        <label>
          Size
          <select
            name="size"
            value={formValues.size}
            onChange={onChange}
            
          >
            <option value="">- Select an option -</option>
            <option value="8">8"</option>
            <option value="12">12"</option>
            <option value="14">14"</option>
          </select>
        </label>
        <br />

        <label>
          Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            checked={formValues.pepperoni}
            onChange={onChange}
          />
        </label>
        <br />

        <label>
          Pineapple
          <input
            type="checkbox"
            name="pineapple"
            checked={formValues.pineapple}
            onChange={onChange}
          />
        </label>
        <br />

        <label>
          Olives
          <input
            type="checkbox"
            name="olives"
            checked={formValues.olives}
            onChange={onChange}
          />
        </label>
        <br />

        <label>
          Bacon
          <input
            type="checkbox"
            name="bacon"
            checked={formValues.bacon}
            onChange={onChange}
          />
        </label>
        <br />

        <label>
          Additional Instructions:
          <input 
          type="text"
          name="instructions"
          value={formValues.instructions}
          onChange={onChange}
          />
        </label>
        <br />
        <button type="submit" className="submitButton">Submit</button>
      </form>
    </div>
  );
};
export default Pizza;
