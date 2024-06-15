import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Widgets from "../widgets/Widgets.jsx"
import { signOut } from 'firebase/auth'
import auth from '../../../firebase.init.js'
import { Outlet } from 'react-router-dom'
import useLoggedInUser from '../../hooks/useLoggedInUser.js'
import { useAuthState } from 'react-firebase-hooks/auth'


function Home() {

  const user = useAuthState(auth)
 
  function handleLogout() {
    signOut(auth)
  }


  const [loggedInUser] = useLoggedInUser();
  
  return (


    <div className='app'>
      <Sidebar handleLogout={handleLogout} user={user} />
      <Outlet/>
      <Widgets/>
    </div>
  )
}

export default Home