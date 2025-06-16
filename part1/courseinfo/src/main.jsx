import { createRoot } from "react-dom/client";

import App from "./App.jsx";

let counter = 0;

createRoot(document.getElementById("root")).render(<App counter={counter} />);
