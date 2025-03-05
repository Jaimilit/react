
import React from "react";
import Header from "./Header";
import Footer from "./Footer"; 
import MainContent from "./MainContent";
import ReactDOM from "react-dom/client";




function Page() { 
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<Page />);


//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<Page />);
