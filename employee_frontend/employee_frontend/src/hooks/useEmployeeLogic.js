import { useState } from 'react';
import { getEmployees, addEmployee, updateEmployee, deleteEmployee } from '../services/employeeService';
import { toast } from 'react-toastify';

const useEmployeeLogic = () => {
    const [employees, setEmployees] = useState([]);
    const [form, setForm] = useState({ name: '', email: '', position: '', salary: '' });
    const [editingId, setEditingId] = useState(null);

    const fetchEmployees = async () => {
        const data = await getEmployees();
        setEmployees(data);
    };

    const handleSubmit = async (employee) => {
        if (editingId) {
            await updateEmployee(editingId, employee);
            toast.success('Employee updated');
        } else {
            await addEmployee(employee);
            toast.success('Employee added');
        }
        setEditingId(null);
        setForm({ name: '', email: '', position: '', salary: '' });
        fetchEmployees();
    };

    const handleEdit = (employee) => {
        setForm(employee);
        setEditingId(employee._id);
    };

    const handleDelete = async (id) => {
        await deleteEmployee(id);
        toast.error('Employee deleted');
        fetchEmployees();
    };

    return { employees, form, setForm, editingId, handleSubmit, handleEdit, handleDelete, fetchEmployees };
};

export default useEmployeeLogic;
