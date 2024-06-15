import React from 'react'
import "../Pages.css"
import MainProfile from './mainprofile/MainProfile';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
function Profile() {
      const [ user ] = useAuthState(auth);
      return (
        <div className="profilePage">
          <MainProfile user={user} />
        </div>
      );
}

export default Profile