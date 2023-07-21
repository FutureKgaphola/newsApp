import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import cbcnews from '../assets/cbcnews.png';
import NewFooter from "./newFooter";


const Home = () => {
    const [news, setnews] = useState([]);
    const data = useLoaderData();
    useEffect(() => {
        if (data !== '') {
            if (String(data.status).toLowerCase() === "ok") {
                setnews(data.articles);
            }
        }

    }, [data]);

    return (

        <div className="container  d-flex justify-content-center align-items-center"
        >
            <div className="row">
                <Navbar />
                {
                    news?.map((item, index) => (
                        <div key={index} className="col-lg-3 col-md-4 col-xm-6 col-sm-6 d-flex justify-content-center" style={{ marginTop: '10px' }}>
                            {
                                item.author && item.publishedAt && item.description && item.description ?

                                    <div className="card text-white bg-dark mb-3" style={{ maxWidth: '18rem' }}>
                                        <div className="card-header">{item.author}</div>
                                        <div className="card-body">
                                            <h6 className="card-title">{item.publishedAt}</h6>
                                            <img
                                                style={{ objectFit: "cover" }}
                                                className="card-img-top"
                                                src={item.urlToImage} width={'100%'} height={'200px'} alt="...cap"></img>
                                            <p className="card-text">{item.description}</p>
                                            {
                                                item.content && <Link to={'/ReadMore/' + item.content + '/' + item.author} className="btn btn-secondary btn-sm">read more</Link>
                                            }

                                        </div>
                                    </div>

                                    : <div className="card text-white bg-dark mb-3" style={{ maxWidth: '18rem' }}>
                                        <div className="card-header">{"CBC News"}</div>
                                        <div className="card-body">
                                            <h6 className="card-title">{"CBC News"}</h6>
                                            <img
                                                style={{ objectFit: "cover" }}
                                                className="card-img-top"
                                                src={cbcnews} width={'100%'} height={'200px'} alt="...cap"></img>
                                            <p className="card-text">{"CBC News"}</p>

                                        </div>
                                    </div>
                            }

                        </div>
                    ))
                }
                <NewFooter />
            </div>

        </div>
    );
}

export default Home;