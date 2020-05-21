import { h } from "hyperapp";

const About = () => (
    <header class="mb-20 text-center">
        <h1 class="text-4xl tracking-wider font-semibold text-gray-800">Hyparcel</h1>
        <p class="text-gray-600 tagline">
            A <a href="https://github.com/jorgebucaran/hyperapp" class="text-blue-500">Hyperapp v2</a> + <a href="https://tailwindcss.com/" class="text-teal-400">TailwindCSS</a> + <a href="https://parceljs.org/" class="text-yellow-500">Parcel</a> boilerplate, with <a href="https://purgecss.com/" class="text-green-400">PurgeCSS</a> intergrated in production.
        </p>
        <p class="my-6">
            <a href="https://github.com/bonniss/hyparcel" target="_blank" class="underline text-blue-600 hover:text-blue-500">Github</a>
        </p>
    </header>
);

export default About;
