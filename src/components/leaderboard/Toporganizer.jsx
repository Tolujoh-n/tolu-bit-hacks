import React from "react";
import pic from "../../assets/address.jpg";

const tableData = [
  {
    organizer: "Ninjas",
    organizerimg: pic,
    ranking: 1,
    Host: 10,
    pool: 40000,
    status: "Star",
  },
  {
    organizer: "Toxic Aliens",
    organizerimg: pic,
    ranking: 2,
    Host: 8,
    pool: 1200,
    status: "Star",
  },
  {
    organizer: "Injective",
    organizerimg: pic,
    ranking: 3,
    Host: 5,
    pool: 800,
    status: "Star",
  },
  {
    organizer: "META",
    organizerimg: pic,
    ranking: 1,
    Host: 5,
    pool: 230,
    status: "Star",
  },
];

const Toporganizer = () => {
  return (
    <div style={{ borderRadius: "5px", overflowX: "auto" }} className="col-12">
      <table className="responsive-table">
        <thead>
          <tr className="table-header">
            <th className="col col-1">Ranking</th>
            <th className="col col-2">Organizer</th>

            <th className="col col-3">Quiz Host</th>
            <th className="col col-4">Pool</th>
            <th className="col col-5"></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="table-row">
              <td className="col col-1" data-label="Customer Name">
                <div className="text-center">
                  <h5>{row.ranking}</h5>
                </div>
              </td>
              <td
                className="col col-2"
                data-label="Job Id"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  src={row.organizerimg}
                  alt="Product"
                  id="tableimg"
                  style={{
                    marginRight: "10px",
                    Width: "40px",
                    Height: "40px",
                    borderRadius: "50%",
                  }}
                />
                <div style={{ flexGrow: 1 }}>
                  <h5
                    style={{
                      textDecoration: "none",
                      display: "inline-block",

                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {row.organizer}
                  </h5>
                </div>
              </td>

              <td className="col col-3" data-label="Amount">
                <h5>{row.Host}</h5>
              </td>

              <td className="col col-4" data-label="Job Ids">
                <h5>{row.pool}</h5>
              </td>
              <td className="col col-5" data-label="Job Id">
                <button id="followbtn">Follow</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Toporganizer;
