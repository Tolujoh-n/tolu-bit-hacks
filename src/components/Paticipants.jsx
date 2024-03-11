import React from "react";

const tableData = [
  {
    seria: 1,
    name: "cole gas",
    passed: 12,
    failed: 6,
    Points: 600,
    grade: "40%",
  },
  {
    seria: 2,
    name: "Favour",
    passed: 15,
    failed: 10,
    Points: 400,
    grade: "30%",
  },
  {
    seria: 3,
    name: "Nasty",
    passed: 6,
    failed: 12,
    Points: 500,
    grade: "98%",
  },
  {
    seria: 4,
    name: "Kole man",
    passed: 16,
    failed: 2,
    Points: 100,
    grade: "54%",
  },
];

const Paticipants = () => {
  return (
    <div className="col-lg-12">
      <h1 className="card-title">PARTICIPANTS</h1>
      <div style={{ overflowX: "auto" }} className="col-12">
        <table className="responsive-table">
          <thead>
            <tr className="table-header">
              <th className="col col-1">Seria</th>
              <th className="col col-2 text-center">Name</th>
              <th className="col col-3">Passed</th>
              <th className="col col-3">Failed</th>
              <th className="col col-5">Points</th>
              <th className="col col-6">Grade</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="table-row">
                <td className="col col-1" data-label="Customer Name">
                  <div className="text-center">
                    <h5>{row.seria}</h5>
                  </div>
                </td>

                <td className="col col-2" data-label="Customer Name">
                  <div className="text-center">
                    <h5>{row.name}</h5>
                  </div>
                </td>
                <td className="col col-3" data-label="Amount">
                  <h5>{row.passed}</h5>
                </td>
                <td className="col col-3" data-label="Amount">
                  <h5>{row.failed}</h5>
                </td>

                <td className="col col-5" data-label="Job Ids">
                  <h5>{row.Points}</h5>
                </td>
                <td className="col col-6" data-label="Job Id">
                  <h5>{row.grade}</h5>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Paticipants;
