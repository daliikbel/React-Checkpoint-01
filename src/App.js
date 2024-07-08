
import React from 'react';
import CardDetails from './CardDetails';

const App = () => {
  const firstName = "there!";

  return (
    <div className="App">
      <CardDetails />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Hello, {firstName ? firstName : "there!"}</h2>
        {firstName && (
          <img
            src="https://media1.tenor.com/m/wfIBwLubZQQAAAAC/hello-wave.gif"
            alt="Hello"
          />
        )}
      </div>
    </div>
  );
};
export default App;