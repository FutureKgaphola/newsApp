import Navbar from "./Navbar";
import NewFooter from "./newFooter";
import error404 from '../assets/error.jpg';

const Notfound = () => {
    return ( 
        <div className="container  d-flex justify-content-center align-items-center"
        >
            <div className="row">
                <Navbar />
                <img
                style={{objectFit:'cover'}}
                alt="404"
                src={error404}
                />
                <NewFooter />
            </div>
        </div>
     );
}
 
export default Notfound;