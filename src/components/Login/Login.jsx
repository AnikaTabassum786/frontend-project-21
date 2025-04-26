import React from 'react';

const Login = () => {
    const handleGoogleSignIn=()=>{
        console.log('hello')
    }
    return (
       <>
        <div>
            Log in
        </div>

        <button onClick={handleGoogleSignIn}>Sign In With Google</button>
       </>
    );
};

export default Login;