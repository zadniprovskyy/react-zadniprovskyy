import React from 'react';
import { ProjectCard } from './projectCard';
import "../../styles/sections.css";


export class Projects extends React.Component {
  render () {
    return (
        // <div class="bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-teal-500">asdfasdf</div>
    <section id="projects" class="projectsSection bg-blue-100 text-black py-12">
        <h2 class="text-center text-3xl m-5 font-bold">Projects</h2>
        
        <div class="w-2/3 m-auto">
          <ul>
            <li>
              <a href="https://github.com/zadniprovskyy/perlin-noise-animation">Perlin Planets</a><br></br>
              In this project I used perlin noise to generate marble like textures and animation.  
              <a href="https://github.com/zadniprovskyy/perlin-noise-animation">Demo</a>
            </li>

            <li>
              <a href="https://colab.research.google.com/drive/1GFdj0PXpjHBCw7PKkrYljy-7rwN01lwD?usp=sharing">Attention-based neural machine translation</a><br></br>
              In this project I trained a few attention-based neural machine translation models to translate words from English to Pig-Latin.
            </li>
          </ul>
          

          {/* <ProjectCard
            title="Sparrow"
            desc="Helped Sparrow win second place at the UofT Hatchery demo day.
            We built their object recognition system and full stack desktop application."
            picUri="/assets/sparrow.png"
            link="https://hatchery.engineering.utoronto.ca/team/sparrow/"
          /> */}
        </div>
    </section>
        

    );
  }

}