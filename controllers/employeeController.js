const Employee = require('../models/Employee');

// Get all employees
const getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
};

// Get employee by ID
const getEmployeeById = async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
};

// Add new employee
const addEmployee = async (req, res) => {
    const { name, email, position, salary } = req.body;
    const newEmployee = new Employee({ name, email, position, salary });
    await newEmployee.save();
    res.status(201).json(newEmployee);
};

// Update employee
const updateEmployee = async (req, res) => {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(employee);
};

// Delete employee
const deleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: 'Employee deleted' });
};

module.exports = {
    getEmployees,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee
};
