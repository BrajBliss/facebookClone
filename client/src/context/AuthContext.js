import { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
	user: {
		_id: '616c22148b96900cb91ce1ef',
		username: 'jane',
		email: 'jane@gmail.com',
		profilePicture: 'person/1.jpeg',
		coverPicture: '',
		followers: [],
		followings: [],
		isAdmin: false,
	},
	isFetching: false,
	error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				isFetching: state.isFetching,
				error: state.error,
				dispatch,
			}}>
			{children}
		</AuthContext.Provider>
	);
};
