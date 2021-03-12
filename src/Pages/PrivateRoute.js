import React from 'react'
import { useSelector } from 'react-redux'
import { isEmpty, isLoaded } from 'react-redux-firebase'
import { Redirect, Route } from 'react-router-dom'

function PrivateRoute({children, ...rest })  {
    const auth = useSelector(state => state.firebase.auth)
    console.log("empty", !isEmpty(auth))
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLoaded(auth) && !isEmpty(auth) ?
                    (children) :
                    (<Redirect
                        to={{
                            pathname: "Authentication",
                            state: { from: location }
                        }}
                    />
                    )}
        >

        </Route>
    )
}

export default PrivateRoute
