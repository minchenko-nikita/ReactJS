import Message from "./Message";

function App() {
  const name = 'Мир'
  return (
    <Message props={name}/>
  );
}

export default App;
