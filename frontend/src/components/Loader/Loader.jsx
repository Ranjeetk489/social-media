import React from "react";
import {SyncLoader} from "react-spinners";

const Loader = () => {
  return <div>
      <SyncLoader speedMultiplier={0.75} margin={6} size= {25}></SyncLoader>
  </div>;
};

export default Loader;
