import React from 'react';
import { Link, Outlet } from 'react-router-dom';


import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile ">
            <input id="mt-drawer-2" type="checkbox" class="drawer-toggle " />
            <div class="drawer-content ">
                {/* <!-- Page content here --> */}
                <h2 className='text-3xl text-blue-600 font-bold'>Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side bg-blue-400">
                <label for="mt-drawer-2" class="drawer-overlay "></label>
                <ul class="menu pt-4 overflow-y-auto w-48  text-base-content h-full">

                    <li><Link to='/dashboard'>Welcome</Link></li>

                    {!admin ?
                        <>
                            <li><Link to='/dashboard/order'>My Order</Link></li>
                            <li><Link to='/dashboard/myprofile'>My Profile</Link></li>

                            <li><Link to='/dashboard/review'>Add Review</Link></li>
                            {/* <li><Link to='/dashboard/history'>My History</Link></li> */}
                        </> : ' '}

                    {admin &&
                        <>
                            <li><Link to='/dashboard/users'>Make Admin</Link></li>
                            <li><Link to='/dashboard/manage'>Manage Products</Link></li>
                            <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                            <li><Link to='/dashboard/manageProducts'>Add Products</Link></li>

                            {/* <li><Link to='/dashboard/addDoctor'>All Doctor</Link></li>
                            <li><Link to='/dashboard/manageDoctor'>Manage Doctor</Link></li> */}
                        </>


                    }
                </ul>

            </div>
        </div >
    );
};

export default Dashboard;