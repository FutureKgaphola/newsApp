import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import NewFooter from "./newFooter";

const ReadMore = () => {
    const { msg, author } = useParams();
    console.log(msg);
    console.log(author);
    return (
        <div className="container d-flex justify-content-center align-items-center"
        >
            <div className="row">
                <Navbar />
                <div className="card" style={{ margin: '3px' }}>
                    <div>
                        CBC News
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{author}</h5>
                        <p className="card-text">{msg}</p>
                        <Link style={{ textDecoration: 'none' }} to={'/'} class="badge text-bg-danger">Go back home</Link>
                    </div>
                </div>
                <NewFooter />
            </div>
        </div>
    );
}

export default ReadMore;