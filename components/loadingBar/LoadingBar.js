import React from "react";

export default function LoadingBar({ loading, total, loadingcolor, height }) {
  const Parentdiv = {
    height: height,
    width: "100%",
    display: "flex",
  };
  const Middlediv = {
    height: "100%",
    width: `${100 / total}%`,
    padding: "0px 1px",
  };
  const Loadingdiv = {
    height: "100%",
    width: "100%",
    backgroundColor: loadingcolor,
  };
  const Emptydiv = {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  };
  const ChildComponent = (loading) => {
    var loadingArr = [];
    var emptyArr = [];
    for (let i = 0; i < loading; i++) {
      loadingArr.push(i);
    }
    for (let i = 0; i < total - loading; i++) {
      emptyArr.push(i);
    }
    return (
      <div style={Parentdiv}>
        {loadingArr.map((value, index) => (
          <div style={Middlediv} key={index}>
            <div style={Loadingdiv}></div>
          </div>
        ))}
        {emptyArr.map((value, index) => (
          <div style={Middlediv} key={index}>
            <div style={Emptydiv}></div>
          </div>
        ))}
      </div>
    );
  };
  return <div>{ChildComponent(loading)}</div>;
}
