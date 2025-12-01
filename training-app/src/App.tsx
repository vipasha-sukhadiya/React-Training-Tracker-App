import "./App.css";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Input from "./components/ui/Input";

function App() {
  return (
    <div className="App">
      <Card title="Login" style={{ maxWidth: "400px", margin: "0 auto", marginTop: "100px" }}>
        <Input value="" placeholder="Enter email" onChange={() => {}} />
        <Input value="" placeholder="Enter password" onChange={() => {}} />
        <Button label="Login" onClick={() => alert("Button clicked!")} />
      </Card>
    </div>
  );
}

export default App;
