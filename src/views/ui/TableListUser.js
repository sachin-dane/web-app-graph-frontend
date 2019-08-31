import React from 'react';

const TableListUser = data => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col" className="sm-case sort">
                        <div>Username</div>
                    </th>
                    <th scope="col" className="sm-case  text-right">
                        <div>Count</div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {data &&
                    data.data.map((res, index) => (
                        <tr key={`tablelist${index + 1}`}>
                            <td>{res.name}</td>
                            <td className="text-right">{res.rate}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
};
export default TableListUser;
