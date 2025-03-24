import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import useEmployeeLogic from './hooks/useEmployeeLogic';

import 'react-toastify/dist/ReactToastify.css';

function App() {
    const { employees, form, setForm, editingId, handleSubmit, handleEdit, handleDelete, fetchEmployees } = useEmployeeLogic();

    useEffect(() => {
        fetchEmployees();
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Employee Management</h2>
            <ToastContainer />
            <div className="row">
                <div className="col-md-5">
                    <EmployeeForm form={form} setForm={setForm} editingId={editingId} onSubmit={handleSubmit} />
                </div>
                <div className="col-md-7">
                    <EmployeeList employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
                </div>
            </div>
        </div>
    );
}

export default App;
