import React, { useState } from 'react';
import axios from 'axios'


const App = () => {
  const [joke, setJoke] = useState(null);
  const getJoke = (event) => {
    event.preventDefault();
    axios.get('http://api.icndb.com/jokes/random?limitTo=[nerdy]')
      .then(response => {
        console.log(response.data.value.joke)
        setJoke(response.data.value.joke);
      })
  } 
  return (
    <div className="App">
      <h2>Simple Chuck Norris -joke app</h2>
      <p>Your joke is: </p>
      {joke ? <p> {joke} </p> : null}
      <button onClick={getJoke}>Press the button, get a joke!</button>
    </div>
  );
};

export default App;
