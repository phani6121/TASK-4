import React, { useState } from 'react';

const SearchFilter = () => {
    const [search, setSearch] = useState("");

    const headers = ["ID", "NAME", "AGE"];

    let objects = [];
    for (let i = 0; i < 12; i++) {
        let newObj = {
            id: (i + 1).toString(),
            name: "N.Phanindra",
            age: "26"
        };
        objects.push(newObj);
    }

    return (
        <div className="container mt-4">
            <div className="text-center">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search ID"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <h1 className="text-center">Details</h1>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className="col-4">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {/* filter is based on condition return to create a new array */}
                    {/* Includes method based on condition return true or false */}
                    {objects
                        .filter(obj => obj.id.includes(search))
                        .map((obj) => (
                            <tr key={obj.id}>
                                <td>{obj.id}</td>
                                <td>{obj.name}</td>
                                <td>{obj.age}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default SearchFilter;
