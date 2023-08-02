import { Global } from "@emotion/react";
import { Navbar } from "./components";
import { cssReset } from "./cssReset";


function App() {
  return (
    <>
      <Global styles={cssReset} />
      <Navbar />
    </>
  );
}

export default App;
