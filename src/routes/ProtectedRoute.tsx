import { ReactNode } from "react";
import { logOut, useCurrentToken } from "../redux/features/auth/authSlice"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { verifiyToken } from "../utils/VerifyToken";
import { Navigate } from "react-router-dom";


type TProtectedRoute = {
    children: ReactNode;
    role: string | undefined;
};
const ProtectedRoute = ({ children, role }: TProtectedRoute) => {

    const token = useAppSelector(useCurrentToken)
    let user;
    if (token) {
        user = verifiyToken(token)
    }
    const dispatch = useAppDispatch()
    if (role !== undefined && role !== user?.role) {
        dispatch(logOut())
        return <Navigate to="/login" replace={true} />
    }
    if (!token) {
        return <Navigate to="/login" replace={true} />
    }
    return children;
}
export default ProtectedRoute