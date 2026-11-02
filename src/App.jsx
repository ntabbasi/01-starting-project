//app
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './assets/data.js';
import TabButton from './components/TabButton/TabButton.jsx';
import { useState } from 'react';
import Section from './components/Section.jsx';
function App() {
  
  let [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton){
      console.log('Selected Button', selectedButton);
      setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
     <Section id="core-concepts">
  <h2>Time to get started!</h2>
  <ul>
    <CoreConcept {...CORE_CONCEPTS[0]}/>
    <CoreConcept {...CORE_CONCEPTS[1]}/>
    <CoreConcept {...CORE_CONCEPTS[2]}/>
    <CoreConcept {...CORE_CONCEPTS[3]}/>
  </ul>
</Section>
        <Section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic==='components'} onClick={()=>{handleSelect('components')}}> Components </TabButton>
            <TabButton isSelected={selectedTopic==='jsx'}onClick={()=>{handleSelect('jsx')}}> JSX </TabButton>
            <TabButton isSelected={selectedTopic==='props'}onClick={()=>{handleSelect('props')}}> Props </TabButton>
            <TabButton isSelected={selectedTopic==='state'}onClick={()=>{handleSelect('state')}}> State </TabButton>
          </menu>

          {!selectedTopic ? <p>Please select a topic</p>:(
            <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>)}
        </Section>
      </main>
    </div>

  );
}
export default App;