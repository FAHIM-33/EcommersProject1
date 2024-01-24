import { Outlet } from "react-router-dom";


const ChechoutLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
            <p>Money options..</p>
        </div>
    );
};

export default ChechoutLayout;