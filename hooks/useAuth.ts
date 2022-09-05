import {useMemo} from 'react'
import {selectCurrentUser, selectUserToken} from "@/src/redux/Auth/authSlice";
import {useSelector} from "react-redux";

export const useAuth = () => {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectUserToken)
    return useMemo(()=> ({user, token}), [user, token])
}
