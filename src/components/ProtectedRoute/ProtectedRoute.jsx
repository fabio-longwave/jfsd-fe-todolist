import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import {useNavigate} from "react-router";
import {useSelector} from "react-redux";
import {UserSelector} from "../../reducers/user.slice.js";

const ProtectedRoute = () => {
    const user = useSelector(UserSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if(user.accessToken) {
            return;
        } else {
            navigate('/');
        }
    }, []);
    return <Outlet />
}

export default ProtectedRoute