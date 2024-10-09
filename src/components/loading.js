// Loading.js
import React from "react";
import { Oval } from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Oval
        height={80}
        width={80}
        color="#318dcc"
        ariaLabel="loading"
        secondaryColor="#f3f3f3"
        strokeWidth={2}
      />
    </div>
  );
};

export default Loading;
