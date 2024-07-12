import  { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.iinits";

function useLoggedInUser() {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [loggedInUser, setLoggedInuser] = useState({});

  useEffect(() => {
    fetch(`https://twitter-clone-3sf0.onrender.com/loggedInUser?email=${email}`)
      .then((res) => res.json())
      .then((data) => setLoggedInuser(data));
  }, [email, loggedInUser]);

  return [loggedInUser, setLoggedInuser];
}

export default useLoggedInUser;
