import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";

export default function Examples() {
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
    <Section title={"Examples"} id="examples">
      <menu>
        <TabButton onClick={() => handleSelect("components")} isSelected={"components" === selectedTopic}>
          Components
        </TabButton>
        <TabButton onClick={() => handleSelect("jsx")} isSelected={"jsx" === selectedTopic}>
          JSX
        </TabButton>
        <TabButton onClick={() => handleSelect("props")} isSelected={"props" === selectedTopic}>
          Props
        </TabButton>
        <TabButton onClick={() => handleSelect("state")} isSelected={"state" === selectedTopic}>
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
    </Section>
  );
}
