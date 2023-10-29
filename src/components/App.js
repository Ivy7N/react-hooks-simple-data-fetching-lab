// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  const [dogImageUrl, setDogImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchDogImage() {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDogImageUrl(data.message);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        
        setIsLoading(false); 
      }
    }

    fetchDogImage(); 

  }, []); 

  return (
    <div className='App'>
      <h1>Random Dog Image</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={dogImageUrl} alt='A Random Dog' />
        </div>
      )}
    </div>
  );
}

export default App;
