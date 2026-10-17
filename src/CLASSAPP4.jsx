function App() {
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

function UserData(){
  const user = [
    first: "Noor",
    last: "Abbasi",
    age = 20,
  ]
  return (
    <div>
      <ul>
        User Data 
        <li> first:{user.first}</li>
        <li>last:{user.last}</li>
        <li>Age:{user.age}</li>
      </ul>
    </div>
  )
  
}

export default App;
