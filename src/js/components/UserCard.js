import { h } from "hyperapp";

const dayjs = require('dayjs');

const UserCard = ({ info }) => (
    <div class="max-w-sm w-full lg:max-w-full lg:flex">
        <div
            class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{ backgroundImage: `url(${info.picture.large})` }}
            title={`${info.name.title} ${info.name.first} ${info.name.last}`}
        ></div>
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal flex-1">
            <div class="mb-8">
                <div class="text-gray-900 font-bold text-xl mb-2">
                    {`${info.name.title} ${info.name.first} ${info.name.last}`}
                </div>
                <p class="text-gray-700 text-base">
                    {info.phone}
                </p>
            </div>
            <div class="flex items-center">
                <img
                    class="w-10 h-10 rounded-full mr-4"
                    src={info.picture.thumbnail}
                    alt="Avatar of Jonathan Reinink"
                />
                <div class="text-sm">
                    <p class="text-gray-900 leading-none">{info.email}</p>
                    <p class="text-gray-600">{dayjs(info.dob.date).format("MMM YYYY")}</p>
                </div>
            </div>
        </div>
    </div>
);

export default UserCard;
