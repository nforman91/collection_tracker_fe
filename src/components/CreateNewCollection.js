import axios from "axios";
import React, { useState } from "react";

const CreateNewCollection = () => {
  const initialFormValues = {
    collection_name: "",
  };

  const initialFormErrors = {
    collection_name: "",
  };

  const initialCollection = [];

  const [collection, setCollection] = useState(initialCollection);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const postCollection = (newCollection) => {
    axios
      .post(`http://localhost:9000/api/collections`, newCollection)
      .then((res) => {
        setCollection([res.data, ...collection]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
        setFormValues(initialFormValues);
      });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const newCollection = {
      collection_name: formValues.collection_name.trim(),
    };
    postCollection(newCollection);
    console.log("formSubmit", newCollection);
  };

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log("onChange", formValues);
  };

  return (
    <div className="collection-object">
      <form onSubmit={formSubmit}>
        <div className="errors">
          <div>{formErrors.collection_name}</div>
        </div>
        <div>
          <label>
            Collection Name:
            <input
              name="collection_name"
              type="text"
              onChange={onChange}
              value={formValues.collection_name}
            />
          </label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateNewCollection;
