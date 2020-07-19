import React from 'react';

export class Menu extends React.Component {
  render () {
    return (
        // <div class="bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-teal-500">asdfasdf</div>

        <nav>
            <div class="container mx-auto px-6 py-2 flex justify-between items-center">
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>
                                Menu
                            </title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
                <div class="hidden lg:block">
                    <ul class="inline-flex">
                        <li><a href="/"><p class="px-4 font-bold">Home</p></a></li>
                        <li><a href="/work"><p class="px-4 hover:text-gray-800">Projects</p></a></li>
                        <li><a href="/services"><p class="px-4 hover:text-gray-800">Services</p></a></li>
                        <li><a href="/contact-us"><p class="px-4 hover:text-gray-800">Contact Us</p></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }

}