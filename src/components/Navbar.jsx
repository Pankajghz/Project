import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black static-top">
                <div className="container-fluid">
                    <NavLink to={'/'} className="navbar-brand">
                        <img src={process.env.PUBLIC_URL + '/icon.png'} alt="Matchup" height="70" />
                        Matchup
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to={"/"} className="nav-link active" aria-current="page">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/"} className="nav-link active" aria-current="page">
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/"} className="nav-link active" aria-current="page">
                                    Help
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/login"} type='button' className="btn btn-danger bg-black" aria-current="page">
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    );
};

export default Navbar;
