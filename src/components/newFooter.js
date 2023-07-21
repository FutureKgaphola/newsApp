import { Link } from 'react-router-dom';
import cbcnews from '../assets/cbcnews.png';

const NewFooter = () => {
    return (
        <div className="NewFooter bg-dark" style={{ display: 'flex', width: '100%' }}>

            <div className="" style={{ backgroundColor: 'blue' }}>
                <img
                    style={{ objectFit: "cover" }}
                    className="card-img-top" src={cbcnews} width={'10%'} height={'100px'} alt="...cap"></img>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <Link style={{ margin: '5px', color: 'white', fontFamily: 'monospace' }} to={'/'} className="navbar-brand">www.cbcnews.org</Link>
            </div>
        </div>
    );
}

export default NewFooter;