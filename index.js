

//import React from "react";
//import ReactDOM from "react-dom/client";

//import ReactDOM from "react-dom"

//import ReactDOM from "react-dom/client"


// Create Navbar Component
//function Navbar() {
//    return (
 //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//        <a className="navbar-brand" href="#">Navbar</a>
//      </nav>
//    );
//  }
  
  // Create MainContent Component
//  function MainContent() {
 //   return <h1>I am learning React</h1>;
 // }


  
  // Get the root DOM element
 // const root = ReactDOM.createRoot(document.getElementById('root'));
  
  // Render both components inside the root div
  //root.render(
//    <div>
  //    <Navbar />
    //  <MainContent />
//    </div>
//  );

// Using plain JavaScript to manipulate DOM
//const h1 = document.createElement("h1");
//h1.textContent = "Hello World";
//h1.className = "header";
//console.log(h1); // Logs the plain JavaScript-created element

// Using JSX (with React)
//const element = <h1 className="header">This is JSX</h1>;
//console.log(element); // Logs a React element object

// Render the React element to the DOM

//const page = (
//  <div>
//    <h1 className= "header"> This is JSX</h1>
//    <p>blah blah blah</p>
//  </div>
//)




   

//ReactDOM.render( navbar, document.getElementById("root"));
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(navbar)

 //ReactDOM.createRoot(document.getElementById("root")).render(navbar)

// Create Navbar Component

/*
const navbar = (
  <nav> 
    <h1> CrossFit </h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
)


function Footer() {
  return (
    <footer style={{ backgroundColor: "#333", color: "white", textAlign: "center", padding: "10px", marginTop: "20px" }}>
      <p>&copy; 2025 CrossFit Community. All rights reserved.</p>
    </footer>
  );
}

function Page() { 
  return (
  <div>
    <h1>This is the best CrossFit Community</h1>
    <h3>Join our Box</h3>
    <ol>
      <li>Prices</li>
      <li>Membership</li>
      <li>Personal Trainers</li>
      <li>Meet the team</li>
    </ol>
  </div>
)
}

*/


function Navbar() {
  return (
    <nav> 
      <h1> CrossFit </h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}


function Header() {
  return (
    <div>
      <h1>Jaimi's CrossFit Box</h1>
    </div>
  );
}


function MainContent() {
  return (
    <div>
      <h1>This is the best CrossFit Community</h1>
            <h3>Join our Box</h3>
            <ol>
              <li>Prices</li>
              <li>Membership</li>
              <li>Personal Trainers</li>
              <li>Meet the team</li>
            </ol>
    </div>
  );
}


function Footer() {
  return (
    <footer style={{ backgroundColor: "#333", color: "white", textAlign: "center", padding: "10px", marginTop: "20px" }}>
      <p>&copy; 2025 CrossFit Community. All rights reserved.</p>
    </footer>
  );
}


function Page() { 
  return (
    <div>
      <Header />
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);



//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<Page />);



//ReactDOM.render(<Page />, document.getElementById("root"))
//document.getElementById("root").append(JSON.stringify(page))