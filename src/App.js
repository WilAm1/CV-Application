import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { CV_DATA } from "./sampleModel";

export default function App() {
  return (
    <div>
      <Header />
      <Main staticModel={CV_DATA} />
    </div>
  );
}
