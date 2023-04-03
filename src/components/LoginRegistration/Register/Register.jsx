import React, { useState } from 'react';
import './register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../App.css';
import { Link, Routes, Route } from 'react-router-dom';
import LoginApp from '../Login/LoginApp';




function Register(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Register button clicked');
    // code to register user and show other components
    props.onRegister();
  };

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12">
          <div
            className="bg-dark text-white my-5 mx-auto registration-card"
            style={{ borderRadius: '1rem', maxWidth: '400px' }}
          >
            <div className="card-body p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2">Watchd</h2>
              <p className="text-white-50 mb-5">Please register to enter!</p>

              <div className="mb-4 w-100">
                <label htmlFor="firstName" className="form-label text-white">
                  First Name
                </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="mb-4 w-100">
                <label htmlFor="lastName" className="form-label text-white">
                  Last Name
                </label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="mb-4 w-100">
                <label htmlFor="email" className="form-label text-white">
                  Email address
                </label>
                <input
                  className="form-control form-control-lg"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4 w-100">
                <label htmlFor="password" className="form-label text-white">
                  Password
                </label>
                <input
                  className="form-control form-control-lg"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div
                className="btn-register"
                style={{ color: 'black' }}
                onClick={handleRegister}
              >
                Register
              </div>

              <div>
                <p className="mb-0">
                  Already have an account?{' '}
                  <Link to="/LoginRegistration/Login/LoginApp" className="text-white-50 fw-bold">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;



/*
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';

function Register(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Register button clicked');
    // code to register user and show other components
    props.onRegister();
  };

  return (
    <MDBContainer fluid>

      <MDBRow className="d-flex justify-content-center align-items-center h-100">

        <MDBCol col="12">

          <MDBCard
            className="bg-dark text-white my-5 mx-auto registration-card"
            style={{ borderRadius: '1rem', maxWidth: '400px' }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2">Watchd</h2>
              <p className="text-white-50 mb-5">Please register to enter!</p>

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="First Name"
                id="formControlLg"
                type="text"
                size="lg"
                onChange={(e) => setFirstName(e.target.value)}
              />

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Last Name"
                id="formControlLg"
                type="text"
                size="lg"
                onChange={(e) => setLastName(e.target.value)}
              />

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                onChange={(e) => setEmail(e.target.value)}
              />

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                onChange={(e) => setPassword(e.target.value)}
              />

              <div
                className="btn-register"
                color="white"
                size="lg"
                style={{ color: 'black' }}
                onClick={handleRegister}
              >
                Register
              </div>

              <div>
                <p className="mb-0">
                  Already have an account?{' '}
                  <a href="#!" class="text-white-50 fw-bold">
                    Login
                  </a>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Register;
*/