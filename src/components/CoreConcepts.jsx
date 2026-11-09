import CoreConcept from './CoreConcept/CoreConcept.jsx';
import { CORE_CONCEPTS } from '../assets/data.js';
import Section from './Section.jsx';

export default function CoreConcepts() {
  return (
    <Section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        <CoreConcept {...CORE_CONCEPTS[0]} />
        <CoreConcept {...CORE_CONCEPTS[1]} />
        <CoreConcept {...CORE_CONCEPTS[2]} />
        <CoreConcept {...CORE_CONCEPTS[3]} />
      </ul>
    </Section>
  );
}