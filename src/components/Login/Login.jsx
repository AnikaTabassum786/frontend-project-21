import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.init';

const Login = () => {
    const [user,setUser] = useState()

    const provider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handleGoogleSignIn=()=>{
        console.log('Clicked')

        signInWithPopup(auth,provider)
        .then(result => {
            console.log(result.user)
            setUser(result.user)
           
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleGithubSignIn=()=>{
        console.log('Clicked')
        signInWithPopup(auth,githubProvider)
        .then((result)=>{
            setUser(result.user)
            console.log(result.user,'Github sign in')
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const handleGoogleSignOut=()=>{
        signOut(auth)
        .then(()=>{
            setUser(' ')
            console.log('Sign Out done')
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
       <>
        <div>
            Log in
            <p>User{user?.displayName}</p>
            <p>{user?.email}</p>
        </div>

        {/* <button onClick={handleGoogleSignIn}>Sign In With Google</button>
        <br /> <br />
        <button onClick={handleGoogleSignOut}>Sign Out</button> */}

        {
        user? <button onClick={handleGoogleSignOut}>Sign Out</button>
        :
       <>
        <button onClick={handleGoogleSignIn}>Sign In With Google</button>
        <button onClick={handleGithubSignIn}>Sign In With Github</button>
       </>
        }

       </>
    );
};

export default Login;