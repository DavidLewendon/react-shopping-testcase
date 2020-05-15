import React from 'react';
import './sign-in-and-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';


const SignInndSignUpPage  =()=>(
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>

)
export default SignInndSignUpPage;