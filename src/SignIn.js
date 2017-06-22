import React from 'react'

import './SignIn.css'
import { auth, githubProvider, googleProvider } from './base'
import quill from './quill.svg'

const SignIn = () => {
  const authenticate = (provider) => {
    auth.signInWithPopup(provider)
  }

  return (
    <div className="SignIn container">
    <img className="quill" src={quill} alt="Noteherder" />
      <h3 className="title">Welcome to Noteherder. No, we're not Evernote. </h3>
        <p>We're totally way better. You should use this app.</p>
      <div>
        <button 
          className="github" 
          onClick={() => authenticate(githubProvider)}
        >
          <i className="fa fa-github"></i>
          <span>  Sign In With GitHub</span>
        </button>

        <button
          className="google"
          onClick={() => authenticate(googleProvider)}
        >
          <i className="fa fa-google"></i>
          <span>  Sign In With Google</span>
        </button>
      </div>
    </div>
  )
}

export default SignIn