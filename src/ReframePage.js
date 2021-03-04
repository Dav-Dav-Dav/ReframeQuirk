import React from "react";
import { useParams } from "react-router-dom";

export default function ReframePage() {
  const { reframeId } = useParams();

  return (
    <div className="App">
      <h1>Reframe Page</h1>
      <h1>{reframeId}</h1>
    </div>
  );
}
