import React from "react";
import { useEffect } from "react";

function Infosheet({ tableData, onchange }) {
  const addRow = () => {
    onchange([...tableData, Array(tableData[0].length).fill("New Data")]);
  };

  const deleteRow = () => {
    if (tableData.length > 1) {
      onchange(tableData.slice(0, -1));
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const clipboardData = event.clipboardData || window.Clipboard;
    const pastedData = clipboardData.getData("text");

    const rows = pastedData.split("\n");
    const newData = rows.map((row) => row.split("\t")); // Split cells by tabs

    onchange((prevTableData) => [...prevTableData, ...newData]);
    onchange(newData);
    console.log("Current tableData after update:", tableData);
  };

  useEffect(() => {
    console.log("Current tableData:", tableData);
  }, [tableData]);

  return (
    <div>
      <p>Template</p>
      <h2>Dynamic Table</h2>
      <button onClick={addRow}>Add Row</button>
      <button onClick={deleteRow}>Delete Row</button>

      <table onPaste={handlePaste}>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) => {
                      const newData = [...tableData];
                      newData[rowIndex][cellIndex] = e.target.value;
                      onchange(newData);
                    }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Infosheet;
