import React from 'react';

export class ProjectCard extends React.Component {
  render () {
    return (
      <div>
        <h3 class="text-blue-400 text-2xl"> {this.props.title} </h3>
        <div class="text-xl">
          {this.props.desc}
        </div>
      </div>
      
    );
  }

} 