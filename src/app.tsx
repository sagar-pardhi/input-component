import { Input } from "./components";

import phoneIcon from "./assets/baseline-phone.png";

function App() {
  return (
    <div className="app">
      <div className="input-container">
        <p>{"<Input />"}</p>
        <Input placeholder="Placeholder" />
      </div>

      <div className="input-container">
        <p>{"<Input error />"}</p>
        <Input error placeholder="Placeholder" />
      </div>

      <div className="input-container">
        <p>{"<Input disabled />"}</p>
        <Input disabled placeholder="Placeholder" />
      </div>

      <div className="input-container">
        <p>{"<Input helperText='This is helper text' />"}</p>
        <Input placeholder="Placeholder" helperText="This is helper text" />
      </div>

      <div className="input-container">
        <p>{"<Input error helperText='This is helper text' />"}</p>
        <Input
          placeholder="Placeholder"
          error
          helperText="This is helper text"
        />
      </div>

      <div className="input-container">
        <p>{"<Input startIcon />"}</p>
        <Input placeholder="Placeholder" startIcon={phoneIcon} />
      </div>

      <div className="input-container">
        <p>{"<Input endIcon />"}</p>
        <Input placeholder="Placeholder" endIcon={phoneIcon} />
      </div>

      <div className="input-container">
        <p>{"<Input value='Text' />"}</p>
        <Input placeholder="Placeholder" value="Text" />
      </div>

      <div className="input-container">
        <p>{"<Input variantSize='sm' />"}</p>
        <Input placeholder="Placeholder" variantSize="sm" />
      </div>

      <div className="input-container">
        <p>{"<Input variantSize='md' />"}</p>
        <Input placeholder="Placeholder" variantSize="md" />
      </div>

      <div className="input-container">
        <p>{"<Input fullWidth />"}</p>
        <Input placeholder="Placeholder" fullWidth />
      </div>

      <div className="input-container">
        <p>{"<Input multiline row={10} />"}</p>
        <Input placeholder="Placeholder" multiline row={10} />
      </div>
    </div>
  );
}

export default App;
