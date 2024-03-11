import React from "react";
import pic from "../../assets/address.jpg";

const tableData = [
  {
    collection: "The Ninjas",
    collectionimg: pic,
    volume: 20.4,
    change: 12,
    floor: 0.56,
    sale: 60,
    status: "Star",
  },
  {
    collection: "Toxic Aliens",
    collectionimg: pic,
    volume: 25.43,
    change: 12,
    floor: 0.56,
    sale: 60,
    status: "Star",
  },
  {
    collection: "Injective Pepes",
    collectionimg: pic,
    volume: 33.4,
    change: 12,
    floor: 0.56,
    sale: 50,
    status: "Star",
  },
  {
    collection: "The Rugberbs",
    collectionimg: pic,
    volume: 30.4,
    change: 12,
    floor: 0.56,
    sale: 60,
    status: "Star",
  },
];

const Topgenius = () => {
  return (
    <div style={{ overflowX: "auto" }} className="col-12">
      <table className="responsive-table">
        <thead>
          <tr className="table-header">
            <th className="col col-1">Collection</th>
            <th className="col col-2 text-center">Volume</th>
            <th className="col col-3">Change</th>
            <th className="col col-3">Floor Price</th>
            <th className="col col-5">sales</th>
            <th className="col col-6">star</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="table-row">
              <td
                className="col col-1"
                data-label="Job Id"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  src={row.collectionimg}
                  alt="Product"
                  id="tableimg"
                  style={{
                    marginRight: "10px",
                    maxWidth: "50px",
                    borderRadius: "10px",
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
                    {row.collection}
                  </h5>
                </div>
              </td>

              <td className="col col-2" data-label="Customer Name">
                <div className="text-center">
                  <h5>{row.volume}</h5>
                </div>
              </td>
              <td className="col col-3" data-label="Amount">
                <h5>{row.change}</h5>
              </td>
              <td className="col col-3" data-label="Amount">
                <h5>{row.floor}</h5>
              </td>

              <td className="col col-5" data-label="Job Ids">
                <h5>{row.sale}%</h5>
              </td>
              <td className="col col-6" data-label="Job Id">
                <h5>{row.status}</h5>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Topgenius;
