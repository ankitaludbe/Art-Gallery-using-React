

import "./App.css";
import React from 'react';
import Navbar from './Component/Navbar';


import axios from "axios";
import React from "react";

const baseURL = "https://api.harvardartmuseums.org/Image?apikey=88f9eea6-60a7-4239-aa27-6f709b4e7484";

 function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  console.log(post);
  return (
    <>
    

        <Navbar/>
      
    </>

    <div>
      {
        <img src={post["records"][1]["baseimageurl"]} alt="first"/>
      }
    </div>

  );
  // https://www.louvre.fr/en/what-s-on/exhibitions/naples-in-paris
}
 export default App;