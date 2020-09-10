import React from 'react';

const TimesTable = ({ times, headers, firstName, lastName }) => {
  const renderTableHeader = () => {
    return headers.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderTableData = () => {
      return times.map((data, index) => {
        return (
            <tr key={index}>
              <td>{data.event}</td>
              <td>{data.time}</td>
              <td>{data.date}</td>
            </tr>
        )
      })
  }

  return (
        <div>
          <h3 id='tableTitle'>Swim Time Results</h3>
          <table id='swimTimes'>
              <tbody>
                <tr>{renderTableHeader()}</tr>
                {renderTableData()}
              </tbody>
          </table>
        </div>
    )
  }

export default TimesTable;