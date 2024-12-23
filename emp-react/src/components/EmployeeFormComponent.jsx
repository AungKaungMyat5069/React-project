import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {createEmployee, editEmployee, findEmployeeId, getAllEmployees} from "../srevice/EmployeeService.jsx";

const EmployeeFormComponent = () => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [hireDate,setHiredDate] = useState('');
    const [salary,setSalary] = useState(0.0);
    const [errors, setErrors] = useState({
        firstName: '',
        lastName : '',
        email : '',
        phoneNumber : '',
        hireDate : '',
        salary : '',
    })
    // this is same as the router service path:like :id
    const {id} = useParams();


    useEffect(() => {
        if(id) {
            findEmployeeId(id).then(
                res => {
                    setFirstName(res.data.firstName);
                    setLastName(res.data.lastName)
                    setEmail(res.data.email);
                    setPhoneNumber(res.data.phoneNumber);
                    setHiredDate(res.data.hireDate);
                    setSalary(res.data.salary);
                }
            )
        }
    },[]);

    const confirm = () => {
        let valid = true;
        const errorCopy = {...errors};

        if(firstName.trim()) {
            errorCopy.firstName = '';
        } else {
            errorCopy.firstName = "Frist Name is required";
            valid= false;
        }

        if(lastName.trim()) {
            errorCopy.lastName = '';
        } else { 
            errorCopy.lastName = "Last Name is required"
            valid= false;
        }

        if(email.trim()) {
            errorCopy.email = '';
        } else {
            errorCopy.email = "Email is required"
            valid= false;
        }

        if(phoneNumber.trim()) {
            errorCopy.phoneNumber = '';
        } else {
            errorCopy.phoneNumber = "phone number is required"
            valid= false;
        }

        if(hireDate.trim()) {
            errorCopy.hireDate = '';
        } else {
            errorCopy.hireDate = "Hired Date is required"
            valid= false;
        }

        if(salary > 0 ) {
            errorCopy.salary = '';
        } else {
            errorCopy.salary = "Salary minimum is greater 0 ";
            valid= false;
        }
        setErrors(errorCopy);
        // console.log(errorCopy);
        // console.log(errors);
        
        return valid;
    }
    const navigator = useNavigate();

    const firstNameHandler = e => setFirstName(e.target.value);
    const lastNameHandler = e => setLastName(e.target.value);
    const emailHandler = e => setEmail(e.target.value);
    const phoneNumberHandler = e => setPhoneNumber(e.target.value);
    const hiredDateHandler = e => setHiredDate(e.target.value);
    const salaryHandler = e => setSalary(parseInt(e.target.value));




    const saveEmployee = e =>{
        e.preventDefault();
        const employee = {firstName,lastName,email,
        phoneNumber,hireDate,salary};
        if(confirm()) {
            if(id) {
                //console.log("===============================Employee",employee)
                editEmployee(id, employee)
                .then(res => getAllEmployees().then())// you need to update the Employee all list cuz this
                .catch(err => console.log(err))
                navigator('/employees');
            }
            else {
                createEmployee(employee)
                .then(res => console.log(res.data))
                .catch(err => console.log(err));
                navigator('/employees');
            }
        } 
        
    }

    return (
        <>
            <div className="container mx-auto mt-16">
                <div className="flex justify-center">
                    <div className="bg-gray-300 rounded shadow-xl hover:shadow-2xl p-6 w-2/3 mb-16">
                        <form>
                            <div className="grid grid-cols-6 gap-2 items-center mb-3">
                                <label className="col-span-1 text-1xl text-gray-500">FirstName</label>
                                <input className={`col-span-5 py-2 rounded
                                border border-gray-300  shadow-sm focus:outline-none focus:ring
                                focus:ring-light-blue-500 focus:border-light-blue-500 ${errors.firstName ? 'border-red-400' : 'border-gray-300'}`}
                                       name="firstName"
                                       onChange={firstNameHandler}
                                       type="text"
                                       value={firstName}
                                       />
                                       
                                {
                                    errors.firstName && <small className=' text-end col-span-5 text-red-500 translate-x-20'>{errors.firstName}</small>
                                }
                            </div>

                            <div className="grid grid-cols-6 gap-2 items-center mb-3">
                                <label className="col-span-1 text-1xl text-gray-500">LastName</label>
                                <input className={`col-span-5 py-2 rounded
                                border border-gray-300  shadow-sm focus:outline-none focus:ring
                                focus:ring-light-blue-500 focus:border-light-blue-500 ${errors.lastName ? 'border-red-400' : 'border-gray-300'}`}
                                name="lastName"
                                onChange={lastNameHandler}
                                type="text"
                                value={lastName}
                                />
                                {
                                    errors.lastName && <small className=' text-end col-span-5 text-red-500 translate-x-20'>{errors.lastName}</small>
                                }
                            </div>

                            <div className="grid grid-cols-6 gap-2 items-center mb-3">
                                <label className="col-span-1 text-1xl text-gray-500">Email</label>
                                <input className={`col-span-5 py-2 rounded
                                border border-gray-300  shadow-sm focus:outline-none focus:ring
                                focus:ring-light-blue-500 focus:border-light-blue-500 ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
                                name="email"
                                onChange={emailHandler}
                                type="text"
                                value={email}
                                />
                                {
                                    errors.email && <small className=' text-end col-span-5 text-red-500 translate-x-20'>{errors.email}</small>
                                }
                            </div>

                            <div className="grid grid-cols-6 gap-2 items-center mb-3">
                                <label className="col-span-1 text-1xl text-gray-500">Phone Number</label>
                                <input className={`col-span-5 py-2 rounded
                                border border-gray-300  shadow-sm focus:outline-none focus:ring
                                focus:ring-light-blue-500 focus:border-light-blue-500 ${errors.phoneNumber ? 'border-red-400' : 'border-gray-300'}`}
                                       name="phoneNumber"
                                       onChange={phoneNumberHandler}
                                    type="text"
                                    value={phoneNumber}
                                    />
                                {
                                    errors.phoneNumber && <small className=' text-end col-span-5 text-red-500 translate-x-20'>{errors.phoneNumber}</small>
                                }
                            </div>

                            <div className="grid grid-cols-6 gap-2 items-center mb-3">
                                <label className="col-span-1 text-1xl text-gray-500">Hired Date</label>
                                <input
                                    className={`col-span-5 py-2 rounded
                                        border border-gray-300  shadow-sm focus:outline-none focus:ring
                                        focus:ring-light-blue-500 focus:border-light-blue-500 ${errors.hireDate ? 'border-red-400' : 'border-gray-300'}`}
                                    name="hireDate"
                                    onChange={hiredDateHandler}
                                    type="date"
                                    value={hireDate}
                                    />
                                {
                                    errors.hireDate && <small className=' text-end col-span-5 text-red-500 translate-x-20'>{errors.hireDate}</small>
                                }
                            </div>

                            <div className="grid grid-cols-6 gap-2 items-center mb-3">
                                <label className="col-span-1 text-1xl text-gray-500">Salary</label>
                                <input
                                    className={`col-span-5 py-2 rounded
                                        border border-gray-300  shadow-sm focus:outline-none focus:ring
                                        focus:ring-light-blue-500 focus:border-light-blue-500 ${errors.firstName ? 'border-red-400' : 'border-gray-300'}`}
                                    name="salary"
                                    onChange={salaryHandler}
                                    type="number" step="any"
                                    value={salary}
                                    />
                                    {
                                        errors.salary && <small className='text-end col-span-5 text-red-500 translate-x-20'>{errors.salary}</small>
                                    }
                            </div>

                            <button
                                onClick={saveEmployee} 
                                className="border border-gray-500 w-full hover:bg-gray-700 hover:shadow-2xl py-3 px-10 my-3 rounded-xl bg-gray-400 text-white"
                                >{id ? `Update Employee ` : `Save Employee`}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmployeeFormComponent;
