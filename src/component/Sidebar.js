import { Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Signout from '../functions/Signout';
import style from '../style.css';
import logo from '../img/khaslogo.png';
import user from '../img/user.png';


function Sidebar(props) {

    const navigate = useNavigate();

    return (
        <>
            {/*SIDEBAR*/}
                <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sideBarClass" style={{width: "100%", backgroundColor: "#b5b5b5", opacity: "0.7"}}>
                    <a href="/portal" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <img src={logo} alt="Logo" class=" mt-5" style={{ width: "120px", height: "120px",marginLeft:"50px" }} />
                    </a>
                    <hr/>
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <Link className={`nav-link py-3 mx-5 mt-5 ${props.form_active} ${props.form_disable}`} style={{ color: "white", fontWeight: "bold" }}
                                    aria-current="page" 
                                    // to={`${props.form_to}`}
                                    to="/portal/BasvuruFormu"
                                    >
                                        BAŞVURU FORM</Link>
                        </li>
                        <li>
                            <Link className={`nav-link py-3 mx-5 mt-5 ${props.gor_active} ${props.gor_disable}`} style={{ color: "white", fontWeight: "bold" }}
                                    aria-current="page" 
                                    // to={`${props.gor_to}`}
                                    to="/portal/BasvuruGoruntule"
                                    >
                                        BAŞVURU BİLGİ</Link>
                        </li>
                    </ul>
                    <hr />
                    <div className="dropdown">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={user} alt="User" width="32" height="32" className="rounded-circle me-2"/>
                        <strong>Kullanici</strong>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#" onClick={() => Signout(navigate)}>Çıkış Yap</a></li>
                    </ul>
                    </div>
                </div>
                {/*SIDEBAR END*/}
        </>
    );


}

export default Sidebar;