import React from "react";

const Log = ({ logInfo }) => {

  return (
    <>
      <ol id="log">
            {logInfo.map((info) => (
            <li key={`${info.square.row},${info.square.col}`}>
              {info.player} selected {info.square.row},{info.square.col}
            </li>
          ))}
      </ol>
    </>
  );
};

export default Log;
