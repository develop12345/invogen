import React from 'react'
import Template1 from '../Template1/Template1'

function Temprout({tableData}) {
  return (
    <div>

{tableData && tableData.length > 0 && tableData.map((rowData, index) => (
        <Template1  rowData={rowData} key={index}/>
    ))}
   
    </div>
  )
}

export default Temprout