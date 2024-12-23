import  {useEffect, useState} from 'react';
import {deleteEmployee, getAllEmployees} from "../srevice/EmployeeService.jsx";
import {useNavigate} from "react-router-dom";


const EmployeeListComponent = () => {
    const [employees,setEmployees] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        listEmployees();
    }, []);

    const goToEmployeeForm = () => navigator("/employee-form");
    const goToEditEmployeeForm = (id) => navigator(`/update-employee-form/${id}`)
    const toDeleteEmployee = id => { 
        deleteEmployee(id).then(res => getAllEmployees().then(res => setEmployees(res.data)));
        
    }


    const listEmployees = () => getAllEmployees()
        .then(res => setEmployees(res.data))
        .catch(err => console.log(err));

    // console.log(employees);


    return (
        <>
            <div className="container mx-auto mt-16 p-3">
                <button className="py-2 my-6 px-7 text-1xl rounded-xl
                bg-blue-700 hover:bg-blue-500 text-white"
                onClick={goToEmployeeForm}>New Employee</button>

                <div className="relative overflow-hidden shadow-md rounded-lg">
                    <table className="table-auto w-full text-left">
                        <thead className="uppercase bg-[#6b7280] text-[#e5e7eb]"
                               style={{backgroundColor:'#6b7280',color:'#e5e7eb'}}>
                            <tr>
                                <th className="py-1 border text-center  px-6">Id</th>
                                <th className="py-1 border text-center  px-6">FirstName</th>
                                <th className="py-1 border text-center  px-6">LastName</th>
                                <th className="py-1 border text-center  px-6">Email</th>
                                <th className="py-1 border text-center  px-6">Phone</th>
                                <th className="py-1 border text-center  px-6">HiredDate</th>
                                <th className="py-1 border text-center  px-6">Salary</th>
                                <th className="py-1 border text-center  px-6">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            employees.map(emp =>(
                                <tr key={emp.id} className="bg-white text-gray-500">
                                    <td className="py-3 px-6 text-center border  hover:bg-gray-300 hover:text-white">{emp.id}</td>
                                    <td className="py-3 px-6 text-center border hover:bg-gray-300 hover:text-white">{emp.firstName}</td>
                                    <td className="py-3 px-6 text-center border hover:bg-gray-300 hover:text-white">{emp.lastName}</td>
                                    <td className="py-3 px-6 text-center border hover:bg-gray-300 hover:text-white">{emp.email}</td>
                                    <td className="py-3 px-6 text-center border hover:bg-gray-300 hover:text-white">{emp.phoneNumber}</td>
                                    <td className="py-3 px-6 text-center border hover:bg-gray-300 hover:text-white">{emp.hireDate}</td>
                                    <td className="py-3 px-6 text-center border hover:bg-gray-300 hover:text-white">{emp.salary}</td>
                                    <td className="py-3 px-2 text-center border flex">
                                        <button className='bg-blue-500 text-white py-2 px-6 rounded-xl' onClick={() => goToEditEmployeeForm(emp.id)}>Edit</button>
                                        <button className='bg-red-500 text-white py-2 px-6 ml-2 rounded-xl' onClick={() => toDeleteEmployee(emp.id) }>delete</button>
                                    </td>

                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>

);
};

export default EmployeeListComponent;
