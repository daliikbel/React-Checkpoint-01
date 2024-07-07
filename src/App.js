
// import React from 'react';
// import { Card } from 'react-bootstrap';
// import Name from './Name';
// import Price from './Price';
// import Description from './Description';
// import Image from './Image';

// const App = () => {
//   const firstName = " there!";

//   return (
//     <div className="App">
//       <Card style={{ width: '19rem', margin: 'auto', marginTop: '50px' }}>
//         <Card.Body>
//           <Image />
//           <Name />
//           <Price />
//           <Description />
//         </Card.Body>
//       </Card>
//       <div style={{ textAlign: 'center', marginTop: '20px' }}>
//         <h2>Hello, {firstName ? firstName : "there!"}</h2>
//         {firstName && <img src="https://media1.tenor.com/m/wfIBwLubZQQAAAAC/hello-wave.gif" alt="Hello" />}
//       </div>
//     </div>
//   );
// };

// export default App;

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