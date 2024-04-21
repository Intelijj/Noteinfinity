import React from "react";

import Notes from "./Notes";



function Home(props) {
  const {showalert}=props
 
  return (
    <div>
      
      <Notes showalert={showalert}></Notes>
    </div>
  );
}

export default Home;
