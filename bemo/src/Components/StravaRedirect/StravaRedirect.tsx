import React, { useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";

// import { setUser, setUserActivities } from "../actions";
import {
    cleanUpAuthToken,
    testAuthGetter,
    getUserData,
} from "../../Utils/functions";
import { useNavigate } from "react-router-dom";

const StravaRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const authenticate = async () => {
            try {
                // If not redirected to Strava, return to home
                const win: Window = window;

                if (_.isEmpty(win.location)) {
                    return navigate("/");
                }
                // Save the Auth Token to the Store (it's located under 'search' for some reason)
                const stravaAuthToken = cleanUpAuthToken(win.location.search);

                // Post Request to Strava (with AuthToken) which returns Refresh Token and and Access Token
                const tokens = await testAuthGetter(stravaAuthToken);
                //this.props.setUser(tokens);
                const accessToken = tokens.access_token;
                const userID = tokens.athlete.id;

                // Axios request to get users info
                const user = await getUserData(userID, accessToken);
                //this.props.setUserActivities(user);

                // Once complete, go to display page
                navigate("/main");
            } catch (error) {
                navigate("/");
            }
        };
        authenticate();
    }, [])

    return (<div>Loading</div>)
}

const mapStateToProps = (state: any) => {
    return { authTokenURL: state.authTokenURL };
};

export default connect(mapStateToProps)(StravaRedirect);