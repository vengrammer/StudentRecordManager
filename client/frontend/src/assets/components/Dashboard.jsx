
import ViewAllStudent from "./ViewAllStudent";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard(){

   const [user, setUser] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(true);
   const navigate = useNavigate(null);

 
    useEffect(()=>{
        const token = localStorage.getItem("token");

        if(token){
            try{
                axios.get("http://127.0.0.1:8000/api/dashboard", {
                    headers: {Authorization: `Bearer ${token}`}
                }).then((response)=>{
                    console.log('Access granted', response.data);
                    setUser(response.data.user)
                }).catch((error) =>{
                    setError('Failed to fetch dashboard data.', error);
                });
            }catch(error){
                navigate('/login');
            }finally{
                setLoading(false);
            }
        }else{
            navigate('/login');
        }
    }, [navigate]);

    async function handleLogout() {
        try{
            const token = localStorage.getItem('token');
            await axios.post("http://127.0.0.1:8000/api/logout", {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            localStorage.removeItem('token');
            navigate('/login')
        }catch(error){
            setError('Failde to log out');
        }
    }
    return(
        <>
            <div>
                {/* Header */}
                <header className="bg-light shadow d-flex justify-content-between align-items-center p-3">
                    <h4 className="mb-0">Student Record Manager</h4>
                    <h6 className="mb-0">{user?.name || 'Admin'}</h6>
                </header>

                {/* Main layout */}
                <div className="container-fluid">
                    <div className="row">
                        
                    {/* Sidebar */}
                    <nav
                        className="d-flex flex-column p-3 text-white col-12 col-md-3 col-lg-2"
                        style={{ backgroundColor: '#0d6efd', minHeight: '93vh' }}
                    >
                        <a href="#" className="btn btn-primary w-100 mb-2 text-start">Student List</a>
                        <a href="#" className="btn btn-primary w-100 mb-2 text-start">Add Admin</a>
                        <a href="#" className="btn btn-danger w-100 mb-2 text-start" onClick={handleLogout}>Logout</a>
                    </nav>

                    {/* Main content */}
                    <main className="col-12 col-md-9 col-lg-10 p-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <ViewAllStudent/>
                            </div>  
                        </div>
                    </main>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Dashboard;