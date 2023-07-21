import { Outlet } from "react-router-dom";

const ParentContainer = () => {
    return ( 
        <div>
            <main>
                <Outlet/>
            </main>
        </div>
     );
}
 
export default ParentContainer;