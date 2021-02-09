
import { useEffect, useState } from 'react';
import axios from 'axios';

const Convert = ({ text, language }) => {
  const [convertedText, setConvertedText] = useState('');

  useEffect(() => {
   axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: text,
            target: language,
            key: 'AIzaSyCN_UTwjM3djfS7Nt7zNpgXedigC2pJ_8g'
          }
        }
      )
      .then((response) => {
        let temp=response.data.data.translations[0].translatedText
        
        setConvertedText(temp.charAt(0).toUpperCase() + temp.slice(1)); 
      })
      .catch((err) => {
        console.log('rest api error', err);
      });
  }, [text, language]);

  return convertedText;
};

export default Convert;