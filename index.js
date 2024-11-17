// Create Navbar Component
function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
      </nav>
    );
  }
  
  // Create MainContent Component
  function MainContent() {
    return <h1>I am learning React</h1>;
  }

//const h1 = document.getElement("h1")
//h1.textContent = "Imperative"
//h1.className = "header"
//document.getElementById("root").append(h1)
  
  // Get the root DOM element
  const root = ReactDOM.createRoot(document.getElementById('root'));
  
  // Render both components inside the root div
  root.render(
    <div>
      <Navbar />
      <MainContent />
    </div>
  );