
//import React from "react";
//import Header from "./Header";

//import ReactDOM from "react-dom/client";

function Header() {
  return (
    <nav className="nav"> 
      <img src="./kettlebell.jpeg" alt="CrossFit Logo" className="title-image" />
      <h1 className ="title">Jaimi's CrossFit Box</h1>
      <ul className="nav-items">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      </nav>
  );
}


function MainContent() {
  return (
    <div className="main-content"> 
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
    <footer>
      <p>&copy; 2025 CrossFit Community. All rights reserved.</p>
    </footer>
  );
}


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
