import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Register.css'
import { useState } from 'react';
import axios from "axios"

function Register() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [created, setCreated] = useState(new Date());
    const [updated, setUpdated] = useState(new Date());

    const createUser = () => {
        if (password !== "" || firstname !== "" || lastname !== "" || email !== "" || phone !== "" || address !== "") {
            const data = { fullname: firstname + lastname, email: email, phone: phone, address: address, password: password, role: 1, active: 1, created: created, updated: updated }
            axios.post("http://localhost:8000/users", data)
                .then((res) => console.log(res.data))
                .catch((err) => console.log(err))
        }
    }

    return (
        <form className='col-sm-6 offset-sm-3'>
            <h3>Register</h3>
            <div className='row'>
                <div className='col-sm-6'>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} className='form-control' required />
                </div>
                <div className='col-sm-6'>
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} className='form-control' required />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12'>
                    <label htmlFor="address">Address</label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className='form-control' />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12'>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className='form-control' pattern='[0-9]{10}' required />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12'>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' placeholder='example@gmail.com' pattern="[a-zA-Z0-9]+@gmail.com" required />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12'>
                    <label htmlFor="password1">Password</label>
                    <input type="text" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
            </div>
            <div className='col-sm-12'>
                <button className='btn btn-primary' onClick={createUser}>Register</button>
            </div>
        </form>
    );
}

export default Register