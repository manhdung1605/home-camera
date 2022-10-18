import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ children, ...rest }) => {
    let auth = { 'token': false }
    return (
        <Route {...rest}>
            {!auth.token
                ?
                <Redirect to="/login" />
                : 
                children
            }
        </Route>
    )
}

export default PrivateRoute
