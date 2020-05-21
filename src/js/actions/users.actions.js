import { Http } from "hyperapp-fx";

export const ChangeNumberOfUsersFetched = (state, evt) => {
    const val = parseInt(evt.target.value);
    if (isNaN(val)) {
        return state;
    }
    const newState = { ...state };
    newState.tabs.http.numberOfUsers = val;
    return newState;
};

export const FetchUsers = (state) => {
    const numberOfUsers = state.tabs.http.numberOfUsers;

    const apiUrl = `https://randomuser.me/api/?results=${numberOfUsers}`;

    return [
        {
            ...state,
            fetchingUsers: true,
        },
        Http({
            url: apiUrl,
            action: FetchUsersOK,
            error: FetchUserFailed,
        }),
    ];
};

const FetchUsersOK = (state, { results: users }) => {
    console.log("FetchUsersOK -> users", users);
    const newState = { ...state, fetchingUsers: false };
    newState.tabs.http.users = users;
    return newState;
};

const FetchUserFailed = (state, error) => {
    console.log("FetchUserFailed -> error", error);
    return { ...state, fetchingUsers: false };
};
