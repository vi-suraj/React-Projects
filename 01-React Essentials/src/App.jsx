import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;

{
  /* <TabButton onSelect={handleSelect}>Components</TabButton>
  this code will run when the click event occur 

<TabButton onSelect={()=>handleSelect(component)}>Components</TabButton> 
  in this code first ananomus function will get render not the function inside it when click or any event occur only then the function get executed

*/
}
