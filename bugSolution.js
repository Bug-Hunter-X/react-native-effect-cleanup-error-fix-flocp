The solution involves using a ref to track whether the component is still mounted.  The cleanup function should only execute if the component is still mounted. 

```javascript
import React, { useState, useEffect, useRef } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const mounted = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('some-api-endpoint');
        const json = await response.json();
        if (mounted.current) {
          setData(json);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      mounted.current = false; //Set mounted to false before cleanup
      console.log('Cleaning up...');
    };
  }, []);

  return (
    <View>
      {/* ... JSX ... */}
    </View>
  );
};

```