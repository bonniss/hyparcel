import { h } from "hyperapp";
import {
    ChangeNumberOfUsersFetched,
    FetchUsers,
} from "../actions/users.actions";
import UserCard from "../components/UserCard";
import Loading from "../components/Loading";

const Users = ({ state }) => {
    const {
        tabs: { http: usersTab },
    } = state;

    const { users } = usersTab;

    return state.fetchingUsers ? (
        <Loading />
    ) : (
        <div class="users-wrapper">
            <div class="users-settings p-4 border border-gray-400 rounded mb-6">
                <label class="mr-3">Number of users to fetch:</label>
                <div class="underlined-input inline-block text-gray-800">
                    <input
                        type="text"
                        maxlength="3"
                        class="text-right"
                        oninput={ChangeNumberOfUsersFetched}
                        value={state.tabs.http.numberOfUsers}
                    />
                    <span></span>
                </div>
                <p class="text-sm italic">
                    * API by{" "}
                    <a href="https://randomuser.me/" class="text-green-400">
                        randomuser.me
                    </a>
                </p>
                <div className="text-center py-3">
                    <button
                        onclick={FetchUsers}
                        class="w-48 px-3 py-2 border border-indigo-500 text-indigo-500 rounded transition duration-100 hover:bg-indigo-500 hover:text-white"
                    >
                        Fetch users
                    </button>
                </div>
            </div>
            <div class="user-board flex flex-wrap -mx-4">
                {users.map((user) => (
                    <article class="px-4 mb-3 w-full md:w-1/2">
                        <UserCard info={user} />
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Users;
