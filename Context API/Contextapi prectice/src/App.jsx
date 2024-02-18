import React, { useContext } from 'react'; // Ensure you import 'React' from 'react'
import { Usercontext,useUserContext } from '../Context/UserContext';

function App() {
  const { data, setData } = useUserContext(); // Use the custom hook to consume the context

  return (
      <>
        <div>
          <h2>User Component</h2>
          <p>Data: {data}</p>
          <button onClick={() => setData("New Data")}>Set Data</button>
        </div>
      </>
  );
}

export default App;
