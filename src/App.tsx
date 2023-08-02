import { Global } from "@emotion/react";
import { Navbar } from "./components";
import { cssReset } from "./cssReset";
import { Home } from "./Pages/Home";


function App() {
  return (
    <>
      <Global styles={cssReset} />
      <Navbar />
      <Home />
    </>
  );
}

export default App;
