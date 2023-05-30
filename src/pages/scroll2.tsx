import React, { useEffect, useState } from 'react';
import { parseString } from 'xml2js';

const Scroll2 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://nykim.net/tapi/rss');
        const responseData = await response.text();
        console.log(responseData);
        parseString(responseData, (err, result) => {
          if (err) {
            console.error('Error parsing XML:', err);
          } else {
            setData(result);
          }
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Render your parsed data here */}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading data...</p>}
    </div>
  );
};

export default Scroll2;
