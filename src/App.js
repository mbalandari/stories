
function getName(name) {
  return name;
}


function App() {

  return (

    <div>
      <h1>Sup {getName("Maz")}?</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
