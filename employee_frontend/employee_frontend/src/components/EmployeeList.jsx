function EmployeeList({ employees, onEdit, onDelete }) {
    return (
        <div className="card p-3 shadow-sm">
            <h4 className="text-center">Employee List</h4>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary ($)</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((emp) => (
                            <tr key={emp._id}>
                                <td>{emp.name}</td>
                                <td>{emp.position}</td>
                                <td>{emp.salary}</td>
                                <td>
                                    <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(emp)}>
                                        Edit
                                    </button>
                                    <button className="btn btn-danger btn-sm" onClick={() => onDelete(emp._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">No employees found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;
