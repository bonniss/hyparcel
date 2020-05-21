import { h } from "hyperapp";
import { Up, Down } from "../actions/counter.actions";

const Counter = ({ state }) => (
    <div class="counter-wrapper py-8">
        <div class="base-10 flex items-center w-64 mx-auto">
            <button class="hover-bubble text-xl" onclick={Down}>-</button>
            <p class="text-5xl mx-8 w-20 text-center font-bold text-indigo-800">{state.tabs.counter.count}</p>
            <button class="hover-bubble text-xl" onclick={Up}>+</button>
        </div>
        <div class="base-2 w-64 mx-auto flex items-center">
            <button tabindex="-1" class="w-8 h-8 rounded mr-4 bg-orange-300">2</button>
            <p class="text-3xl text-center text-indigo-600">{state.tabs.counter.count.toString(2)}</p>
        </div>
        <div class="base-2 w-64 mx-auto flex items-center">
            <button tabindex="-1" class="w-8 h-8 rounded mr-4 bg-orange-300">16</button>
            <p class="text-3xl text-center text-orange-600">{state.tabs.counter.count.toString(16).toUpperCase()}</p>
        </div>
    </div>
);

export default Counter;
