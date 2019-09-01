import React from 'react';

const UserTableList = ({ users }) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col" className="sm-case">
                        <div>Rule name</div>
                    </th>
                    <th scope="col" className="sm-case text-right">
                        <div>Alerts Count</div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {result.map((rule, index) => {
                    return (
                        <tr key={`tablelist${index + 1}`}>
                            <td>{incidentSummary[rule].name}</td>
                            <td className="text-right">
                                {incidentSummary[rule].incidents_count}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
export default UserTableList;
