import React from "react";
import pic from "../../assets/address.jpg";

const tableData = [
  {
    genius: "Jane col",
    geniusimg: pic,
    ranking: 1,
    won: 56,
    Earn: 400,
    status: "Star",
  },
  {
    genius: "Tolujohn",
    geniusimg: pic,
    ranking: 2,
    won: 45,
    Earn: 120,
    status: "Star",
  },
  {
    genius: "Fabrre",
    geniusimg: pic,
    ranking: 3,
    won: 16,
    Earn: 80,
    status: "Star",
  },
  {
    genius: "Rugberbs",
    geniusimg: pic,
    ranking: 4,
    won: 5,
    Earn: 23,
    status: "Star",
  },
];

const Topgenius = () => {
  return (
    <div style={{ borderRadius: "5px", overflowX: "auto" }} className="col-12">
      <table className="responsive-table">
        <thead>
          <tr className="table-header">
            <th className="col col-1">Ranking</th>
            <th className="col col-2">Genius</th>

            <th className="col col-3">Quiz Won</th>
            <th className="col col-4">Earn</th>
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
                  src={row.geniusimg}
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
                    {row.genius}
                  </h5>
                </div>
              </td>

              <td className="col col-3" data-label="Amount">
                <h5>{row.won}</h5>
              </td>

              <td className="col col-4" data-label="Job Ids">
                <h5>{row.Earn}</h5>
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

export default Topgenius;
