import { h } from "hyperapp";
import { SelectTab } from "../actions/app.actions";

const TabList = ({ state }) => {
    const { currentTab } = state;
    const tabs = Object.keys(state.tabs);
    return tabs ? (
        <ul class="pl-4 tab-lists flex border-b border-gray-200 mb-16">
            {tabs.map(tab => (
                state.currentTab === tab ?
                <li class="py-3 px-6 transition-colors duration-200 rounded-t-lg bg-blue-600 text-white">
                    {state.tabs[tab].label}
                </li> :
                <li class="py-3 px-6 transition-colors duration-200 border-t border-l border-r border-gray-400 rounded-t-lg">
                    <button onclick={() => SelectTab(state, tab)}>{state.tabs[tab].label}</button>
                </li>
            ))}
        </ul>
    ) : null;
};

export default TabList;
