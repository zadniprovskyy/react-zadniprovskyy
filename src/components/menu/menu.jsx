import React from 'react';

export class Menu extends React.Component {
  render () {
    return (
        // <div class="bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-teal-500">asdfasdf</div>
        
        <nav>
            <div class="flex flex-row text-blue-200 text-center">
                <a href="/"><p class="px-4 py-4 m-2 font-bold hover:text-blue-400">Home</p></a>
                <a href="/about"><p class="px-4 py-4 m-2 hover:text-blue-400">About</p></a>
                <a href="/projects"><p class="px-4 py-4 m-2 hover:text-blue-400">Projects</p></a>
                <a href="/contact"><p class="px-4 py-4 m-2 hover:text-blue-400">Contact</p></a>
            </div>
        </nav>
    );
  }

}