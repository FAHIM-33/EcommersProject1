import { Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div>
            <p>Menu Items..</p>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;