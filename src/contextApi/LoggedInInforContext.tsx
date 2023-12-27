import { createContext, Dispatch, SetStateAction, ReactNode, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

interface loggedInfoProps {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  loggedid: string;
  setLoggedid: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  firstname: string;
  setFirstname: Dispatch<SetStateAction<string>>;
  lastname: string;
  setLastname: Dispatch<SetStateAction<string>>;
  isadmin: number;
  setIsadmin: Dispatch<SetStateAction<number>>;
  tokenExp: number; // new property for token expiration
}

export const loggedinInfoContext = createContext<loggedInfoProps>({
  token: "",
  setToken: () => {},
  loggedid: "",
  setLoggedid: () => {},
  email: "",
  setEmail: () => {},
  firstname: "",
  setFirstname: () => {},
  lastname: "",
  setLastname: () => {},
  isadmin: 0,
  setIsadmin: () => {},
  tokenExp: 0,
});

export const LoggedInInforContextProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState<string>(localStorage.getItem('token') || '');
  const [loggedid, setLoggedid] = useState<string>(localStorage.getItem('loggedid') || '');
  const [email, setEmail] = useState<string>(localStorage.getItem('email') || '');
  const [firstname, setFirstname] = useState<string>(localStorage.getItem('firstname') || '');
  const [lastname, setLastname] = useState<string>(localStorage.getItem('lastname') || '');
  const [isadmin, setIsadmin] = useState<number>(parseInt(localStorage.getItem('isadmin') || '0'));

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('token', token);
    localStorage.setItem('loggedid', loggedid);
    localStorage.setItem('email', email);
    localStorage.setItem('firstname', firstname);
    localStorage.setItem('lastname', lastname);
    localStorage.setItem('isadmin', isadmin.toString());
  }, [token, loggedid, email, firstname, lastname, isadmin]);

  // Additional state variable for token expiration
  const [tokenExp, setTokenExp] = useState<number>(0);

  useEffect(() => {
    if (token) {
      // Decode the token to get expiration time
      const decodedToken = jwtDecode(token);

      if (decodedToken && decodedToken.exp) {
        // Calculate expiration time relative to the current time
        const expirationTime = decodedToken.exp * 1000 - Date.now();
        setTokenExp(expirationTime);
        // Set up automatic logout when the token expires
        setTimeout(() => {
          setToken("");
          setLoggedid("");
          setEmail("");
          setFirstname("");
          setLastname("");
          setIsadmin(0);
          navigate("/");
        }, expirationTime);
      }
    }
  }, [token, navigate]);

  return (
    <loggedinInfoContext.Provider value={{
      token, setToken,
      loggedid, setLoggedid,
      email, setEmail,
      firstname, setFirstname,
      lastname, setLastname,
      isadmin, setIsadmin,
      tokenExp,
    }}>
      {children}
    </loggedinInfoContext.Provider>
  );
};
