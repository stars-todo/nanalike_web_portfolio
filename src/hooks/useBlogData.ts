import { useEffect, useState } from 'react';
import { parseString } from 'xml2js';

interface BlogItem {
  title: string[];
  link: string[];
  description: string[];
  pubDate: string[];
}

const useBlogData = () => {
  const [data, setData] = useState<BlogItem[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://nykim.net/tapi/rss');
        const responseData = await response.text();
        parseString(responseData, (err, result) => {
          if (err) {
            console.error('Error parsing XML:', err);
          } else {
            setData(result.rss.channel[0].item);
            setLoading(false);
            console.log(result);
          }
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    setTimeout(() => {}, 12000);
    fetchData();
  }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch('https://nykim.net/tapi/rss');
  //       const xmlData = await response.text();

  //       // Parse the XML data using DOMParser
  //       const parser = new DOMParser();
  //       const xmlDoc = parser.parseFromString(xmlData, 'application/xml');

  //       // Convert the XML document to HTML
  //       const serializer = new XMLSerializer();
  //       const htmlString = serializer.serializeToString(xmlDoc);

  //       // Print the HTML representation of the XML document
  //       console.log(htmlString);
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  return { data, loading };
};

export default useBlogData;
