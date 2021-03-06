import React from "react";

const TimesTable = ({ times, headers }) => {
  const renderTableHeader = () => {
    return headers.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderTableData = () => {
    return times.map((data, index) => {
      return (
        <tr key={index}>
          <td>{data.event}</td>
          <td>{data.time}</td>
          <td>{data.date}</td>
          <td>{data.meet}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <table id="swimTimes">
        <tbody>
          <tr>{times.length ? renderTableHeader() : null}</tr>
          {times.length ? renderTableData() : null}
        </tbody>
      </table>
    </div>
  );
};

export default TimesTable;
