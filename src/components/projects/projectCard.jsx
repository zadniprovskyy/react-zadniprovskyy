import React from 'react';

export class ProjectCard extends React.Component {
  render () {
    return (
      <div>
        <h3 class="text-blue-200 text-xl">Perlin Planets</h3>
        <div class="flex flex-row justify-around text-blue-200">
          <div class="bg-black w-px-4 mr-2 my-auto w-1/3 border border-blue-200">
            {/* <h3 class="text-blue-200 text-xl">Perlin Planets</h3> */}
            <img src={process.env.PUBLIC_URL + '/perlinPlanets.png'} class="object-cover"/>
          </div>

          <div class="w-2/3 border border-blue-200">
            <p>Implemented a perlin noise generator from the scratch.</p>
            <p>Extended the idea of perlin noise to generate smooth animation.</p>
            <p>Demonstrated the idea on the .</p>
          </div>
        </div>
      </div>
      
    );
  }

} 