import { Link, useNavigate } from "react-router-dom";
import cbcnews from '../assets/cbcnews.png';

const Navbar = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    }
    return (
        <nav className="navbar navbar-dark bg-dark justify-content-between">
            <img onClick={() => goHome()}
                style={{ objectFit: "contain", marginLeft: '5px' }}
                src={cbcnews} width={'40px'} height={'40px'} alt="...cap"></img>
            <Link to={'/'} className="navbar-brand">CBC News</Link>
        </nav>
    );
}

export default Navbar;