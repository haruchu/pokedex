import React from "react";
import { createRoot } from "react-dom/client";
import { Example } from "./components/example";

const root = createRoot(document.getElementById("root") as Element);
const element = <Example text={"example"} />;

root.render(element);
