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


// Create Navbar Component
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
   

ReactDOM.render( navbar
  ,
  document.getElementById("root"));