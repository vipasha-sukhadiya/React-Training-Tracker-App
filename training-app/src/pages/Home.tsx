import { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function Home() {
  const [name, setName] = useState("");

  return (
    <div>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter text here"
      />
      <Button label="Submit" onClick={() => alert(`You entered: ${name}`)} />
    </div>
  );
}

export default Home;
