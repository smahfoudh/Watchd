import React from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../App.css';
import { Link } from 'react-router-dom';



function LoginApp(props) {
  const handleLogin = () => {
    console.log('Login button clicked');
    // code to show other components
    props.onLogin();
  };

  console.log('loginApp component is being rendered'); //checking if this is rendered

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12">
          <div className="card bg-dark text-white my-5 mx-auto login-card" style={{ borderRadius: '1rem', maxWidth: '400px' }}>
            <div className="card-body p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2">Watchd</h2>
              <p className="text-white-50 mb-5">Please login to enter!</p>
              <div className="mb-4 mx-5 w-100">
                <label htmlFor="emailInput" className="form-label text-white">
                  Email address
                </label>
                <input type="email" className="form-control form-control-lg" id="emailInput" />
              </div>
              <div className="mb-4 mx-5 w-100">
                <label htmlFor="passwordInput" className="form-label text-white">
                  Password
                </label>
                <input type="password" className="form-control form-control-lg" id="passwordInput" />
              </div>
              <p className="small mb-3 pb-lg-2">
                <a className="text-white-50" href="#!">
                  Forgot password?
                </a>
              </p>
              <button className="btn btn-lg btn-login" style={{ color: 'black' }} onClick={handleLogin}>
                Login
              </button>
              <div>
                <p className="mb-0">
                  Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginApp;




/*
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';


 function LoginApp(props) {
  const handleLogin = () => {
    console.log('Login button clicked');
    // code to show other components
    props.onLogin();

  }
  console.log('loginApp component is being rendered'); //checking if this is rendered



  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto login-card' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2">Watchd</h2>
              <p className="text-white-50 mb-5">Please login to enter!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg"/>

              <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
              <div className='btn-login' color='white' size='lg' style={{ color: "black" }} onClick={handleLogin}>
                Login
              </div>

              <div>
                <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a></p>

              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default LoginApp;

*/