import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a button</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton onSelect={() => handleSelect("components")} isSelected={"components" === selectedTopic}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")} isSelected={"jsx" === selectedTopic}>
              JSX
            </TabButton>
            <TabButton onSelect={() => handleSelect("props")} isSelected={"props" === selectedTopic}>
              Props
            </TabButton>
            <TabButton onSelect={() => handleSelect("state")} isSelected={"state" === selectedTopic}>
              State
            </TabButton>
          </menu>
          {/* {!selectedTopic ? <p>Please select a button</p> : null}
          {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : null} */}

          {/* 2nd approch */}

          {/* {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : (
            <p>Please select a button</p>
          )} */}

          {/* 3rd approch */}

          {tabContent}
        </section>
      </main>
    </div>
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
