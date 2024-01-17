import HomePage from "./Containers/HomePage";
import { NextUIProvider } from "@nextui-org/react"; // NEXT UI
import "./App.css";

function App() {
  return (
    <NextUIProvider>
      <HomePage />
    </NextUIProvider>
  );
}
export default App;
