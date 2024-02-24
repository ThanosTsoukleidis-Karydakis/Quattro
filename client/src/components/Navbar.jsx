import React,{ useState } from 'react'
import { useContext } from 'react'
import Logo from "../img/logo.png";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/authContext";



function Profile_Button(props) {
 // const { currentUser, logout } = useContext(AuthContext);
  return (
    <button className="profile" onClick={props.onClick}>
      My Profile
    </button>
  );
}

function Dropdown_Component(props) {
  const location = useLocation();
  const { onClose } = props;
  const { currentUser, logout } = useContext(AuthContext);
  const isAdminPage = location.pathname === '/admin'|| location.pathname === '/approve';
  const isLoggedIn = currentUser? true : false;

  const handleLinkClick = () => {
    onClose(); 
  };

  return (
    <div className="dropdown-container">
      {props.isVisible ? (
        <ul className="dropdown-list">
          <li><Link className="link" to="/statistics" onClick={handleLinkClick}>My Statistics</Link></li>
          <li>
          { isLoggedIn ? (
            !isAdminPage? (
            <Link to="/contribute" className="link" onClick={handleLinkClick}>
              Wanna contribute?
            </Link> 
          ) : (
          <Link to="/approve" className="link" onClick={handleLinkClick}>
            Approve Contributions
          </Link> 
          )
          ) : (
            <></>
          )}
          </li>
          {currentUser ? (
            <li><Link className="link" to="/" onClick={logout}>Logout</Link></li>
          ) : (
            <li><Link className="link" to="/">
              Login
            </Link></li>
          )}
         
        </ul>
      ) : null}
    </div>
  );
}


const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { currentUser, logout } = useContext(AuthContext);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const closeDropdown = () => {
    setIsVisible(false); 
  };

  const location = useLocation();
  const isAdminPage = location.pathname === '/admin' || location.pathname === '/approve';
  const isLoggedIn = currentUser? true : false;
  const isLoginRegisterPage = location.pathname === '/' || location.pathname === '/register'

    return (
        <div className="navbar">
        <div className="container">
          <div className="logo">
        {isAdminPage ? (
          <Link to="/admin">
            <img src={Logo} alt="" />
          </Link> 
         ) : (
          <Link to="/home">
            <img src={Logo} alt="" />
          </Link>
         )}
          </div>

          {!isLoginRegisterPage? (
            <>
              <span className="profile">
              <div>
              <Profile_Button onClick={toggleVisibility} />
              <Dropdown_Component isVisible={isVisible} onClose={closeDropdown}/>
              </div>
              </span>
            </>
          ) : (
            <></>
          )}
        </div>
    </div>
    )
}

export default Navbar