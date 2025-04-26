import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.init';

const Login = () => {
    const [user,setUser] = useState(null)

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
            const loggedInUser = result.user
            if(!loggedInUser.email && loggedInUser?.providerData?.length){
                
               if(loggedInUser.providerData[0].email){
                loggedInUser.email = loggedInUser.providerData[0].email
                setUser(loggedInUser)
               }
               
            }
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
            setUser(null)
            console.log('Sign Out done')
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
       <>
<div className='container mx-auto border border-gray-400 shadow-md mt-10 w-1/2 h-1/2 p-10'>
        <div className='text-center flex flex-col gap-2 '>
           
            <p><span className='font-bold'>User: </span>{user?.displayName}</p>
            <p><span className='font-bold'>Email: </span>{user?.email}</p>
        </div>

        {/* <button onClick={handleGoogleSignIn}>Sign In With Google</button>
        <br /> <br />
        <button onClick={handleGoogleSignOut}>Sign Out</button> */}

        {
        user? <div className='flex justify-center items-center mt-10'><button className='btn' onClick={handleGoogleSignOut}>Sign Out</button></div>
        :
       <>
        <div className='flex gap-4 justify-center mt-10'>
        <button  className='btn' onClick={handleGoogleSignIn}>Sign In With Google</button>
        <button className='btn' onClick={handleGithubSignIn}>Sign In With Github</button>
        </div>
       </>
        }
</div>

       </>
    );
};

export default Login;