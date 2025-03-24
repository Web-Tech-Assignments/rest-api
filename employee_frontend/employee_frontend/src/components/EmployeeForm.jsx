function EmployeeForm({ form, setForm, editingId, onSubmit }) {
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <div className="card p-3 shadow-sm">
            <h4 className="text-center">{editingId ? 'Edit Employee' : 'Add Employee'}</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" name="position" value={form.position} onChange={handleChange} placeholder="Position" required />
                </div>
                <div className="mb-3">
                    <input type="number" className="form-control" name="salary" value={form.salary} onChange={handleChange} placeholder="Salary" required />
                </div>
                <button type="submit" className={`btn ${editingId ? 'btn-warning' : 'btn-primary'} w-100`}>
                    {editingId ? 'Update Employee' : 'Add Employee'}
                </button>
            </form>
        </div>
    );
}

export default EmployeeForm;
