import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { usernameValidation, passwordValidation } from '../utils/formValidation';

function LogIn() {
    const usernameElement = useRef();
    const passwdElement = useRef();
    const [usernameHasErr, usernameSetError] = useState(false);
    const [passwdHasErr, passwdSetError] = useState(false);

    const formSubmitHandler = ev => {
        ev.preventDefault();
        const password = passwdElement.current.value;
        const username = usernameElement.current.value;
        usernameSetError(usernameValidation(username));
        passwdSetError(passwordValidation(password));
    };

    return (
        <React.Fragment>
            <form action='#' autoComplete='off' onSubmit={formSubmitHandler}>
                <div className='form-inputs'>
                    <div className='username-div input-div'>
                        <label htmlFor='username'>Username or Email</label>
                        <input
                            type='text'
                            id='username'
                            className={usernameHasErr ? 'error' : ''}
                            ref={usernameElement}
                        />
                    </div>
                    <div className='passwd-div input-div'>
                        <label htmlFor='passwd'>Password</label>
                        <input
                            type='password'
                            id='passwd'
                            className={passwdHasErr ? 'error' : ''}
                            ref={passwdElement}
                        />
                    </div>
                </div>
                <button type='submit'>Log In</button>
            </form>
            <p className='navigator'>
                Don't Have an Acoount?
                <Link to='/sign-up'>Sign Up</Link>
            </p>
        </React.Fragment>
    );
}

export default LogIn;
