import React, { useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";

// import { setUser, setUserActivities } from "../actions";
import {
    cleanUpAuthToken,
    testAuthGetter,
    getUserData,
    getUser,
    createUser
} from "../../Utils/functions";
import { useNavigate } from "react-router-dom";

const StravaRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const authenticate = async () => {
            try {
                const win: Window = window;

                if (_.isEmpty(win.location)) {
                    return navigate("/");
                }

                const stravaAuthToken = cleanUpAuthToken(win.location.search);

                const tokens = await testAuthGetter(stravaAuthToken);
                //this.props.setUser(tokens);

                const userID = tokens.athlete.id;

                const user = await getUser(userID);

                let newUser;
                
                if (user) {
                    newUser = await createUser({
                        firstName: tokens.athlete.firstname,
                        lastName: tokens.athlete.lastname,
                        username: tokens.athlete.username,
                        password: "********"
                    });
                }

                if (newUser)
                {
                    localStorage.setItem("user", newUser.data.userId);
                }

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