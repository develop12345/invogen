import React from 'react'
import Template1 from '../Template1/Template1';

function Approute({tableData}) {
    console.log(`approutetableData : ${tableData}`)
  return (
   <div>
   {tableData.length > 0 ? (
        tableData.map((rowData, index) => (
          <Template1 key={index} rowData={rowData} />
        ))
      ) : (
        <p>No data available</p>
      )}
   </div>
  )
}

export default Approute