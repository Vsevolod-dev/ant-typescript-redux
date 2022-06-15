import axios from 'axios'
import {AppDispatch} from '../..'
import UserService from '../../../api/UserService'
import {IUser} from '../../../models/IUser'
import {SetUserAction, AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction} from './types'

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (isAuth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: isAuth}),
    setError: (error: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload: error}),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
        type: AuthActionEnum.SET_IS_LOADING,
        payload: isLoading
    }),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            setTimeout(async () => {
                dispatch(AuthActionCreators.setIsLoading(true))
                const response = await UserService.getUsers()
                const mockUsers = response.data.find(user => user.username === username && user.password === password)
                if (mockUsers) {
                    localStorage.setItem('isAuth', 'true')
                    localStorage.setItem('username', mockUsers.username)
                    dispatch(AuthActionCreators.setUser(mockUsers))
                    dispatch(AuthActionCreators.setIsAuth(true))
                } else {
                    dispatch(AuthActionCreators.setError('Incorrect username or password'))
                }
                dispatch(AuthActionCreators.setIsLoading(false))
            }, 1000)
        } catch (e) {
            dispatch(AuthActionCreators.setIsLoading(false))
            dispatch(AuthActionCreators.setError(JSON.stringify(e)))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        setTimeout(async () => {
            dispatch(AuthActionCreators.setIsLoading(true))

            localStorage.removeItem('isAuth')
            localStorage.removeItem('username')
            dispatch(AuthActionCreators.setUser({} as IUser))
            dispatch(AuthActionCreators.setIsAuth(false))

            dispatch(AuthActionCreators.setIsLoading(false))
        }, 1000)
    }
}