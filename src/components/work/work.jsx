import React from 'react';


export class Work extends React.Component {
  render () {
    return (
        // <div class="bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-teal-500">asdfasdf</div>
    <section id="work" class="workSection text-white py-12">
        <h2 class="text-center text-3xl text-white font-bold my-4">Work & Research</h2>
        <div class="m-auto w-2/3">
            <ul>
                <li>
                    <a class="text-blue-200 hover:text-blue-400 font-bold">Software/ML Engineer @ Sparrow</a><br></br>
                    Worked on creating an ML-powered gaming coach. Used YAD2K to train a YOLO model for detection/tracking of champions in League of Legends. 
                    Used Amazon SageMaker for training and deployment. Sparrow took 2nd place in UofT startup competition.
                </li>
                <li>
                    <a class="text-blue-200 hover:text-blue-400 font-bold">Teaching Assistant @ University of Toronto</a><br></br>
                    Gave weekly tutorials, posted problems and sample solutions. Marked midterms and final exams.
                </li>
                <li>
                    <a class="text-blue-200 hover:text-blue-400 font-bold">Software Developer @ University of Toronto (research/project course) </a><br></br>
                    Extended UofT’s auto grading system for CS assignments. 
                    Developed a module that given a large corpus of student submissions utilized unsupervised machine learning and data visualization
                    techniques to provide both instructors and students with a new type of feedback.
                </li>
            </ul>
        </div>
    </section>

    );
  }

}