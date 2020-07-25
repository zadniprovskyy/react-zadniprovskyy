import React from 'react';
import { ProjectCard } from './projectCard';

export class Projects extends React.Component {
  render () {
    return (
        // <div class="bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-teal-500">asdfasdf</div>
    <section id="projects" class="m-10">
        <h2 class="text-center text-white text-3xl text-blue-400 m-5">Projects</h2>
        
        <div>
          <ProjectCard />
        </div>
    </section>
        

    );
  }

}