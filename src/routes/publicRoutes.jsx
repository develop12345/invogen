import { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Infosheet from "../Components/InfoSheet/Infosheet";
import Headers from "../Components/Header/Header";
import Template1 from "../Components/Template1/Template1";

export const PublicRoutes = () => {
  const [tableData, setTableData] = useState([["data1"]]);

  console.log("tableData...........", tableData);
  return (
    <>
      <Headers />
      <Suspense>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Infosheet
                tableData={tableData}
                onchange={(e) => setTableData(e)}
              />
            }
          />
          <Route
            exact
            path="/template"
            element={<Template1 rowData={tableData}></Template1>}
          />
        </Routes>
      </Suspense>
    </>
  );
};
