import { useMemo } from "react"
import {useDispatch} from "react-redux"
import { bindActionCreators } from "redux"
import { actions } from "../store/favorites/favorites.slice"
import { userSlice } from "../store/user/user.slice"

const rootActions = {
    ...actions,
    ...userSlice.actions
}

export const useActions = (actions) => {
    const dispatch = useDispatch()
    return useMemo(() => {
        return bindActionCreators(rootActions, dispatch)
    }, [dispatch])
}