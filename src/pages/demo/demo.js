import React, { useState, useReducer } from "react";
import Cell from "../../Cell";
import { reducer } from "../../reducer";
import { downLoad_notebook, load_notebook } from "../../utils";
import data from "../../assets/Demo.json";
import Header from "../../components/header/header";

const defaultState = {
  cells: data,
};

export default function Demo() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [currentCell, setCurrentCell] = useState(null);
  const [activeCell, setActiveCell] = useState(1);

  const load = () => load_notebook(dispatch);
  const download = (name) => downLoad_notebook(state, name);
  return (
    <div>
      <Header download={download} load={load} />
      {state.cells.map((cell, index) => {
        return (
          <Cell
            key={cell.id}
            cell={cell}
            dispatch={dispatch}
            currentCell={currentCell}
            setCurrentCell={setCurrentCell}
            cellId={index + 1}
            activeCell={activeCell}
            setActiveCell={setActiveCell}
          />
        );
      })}
    </div>
  );
}
