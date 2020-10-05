import React from 'react';


export class AboutMe extends React.Component {
  render () {
    return (
        // <div class="bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-teal-500">asdfasdf</div>
    <section class="bg-blue-100 py-12" id="about">
          <h2 class="text-center text-3xl text-black font-bold my-4">About Me</h2>
          <div class="text-xl text-center w-1/2 mx-auto">
            <p class="my-4">Hey! My name is Yegor and I am a software engineer based in Toronto.</p>
            <p class="my-4">
              I am interested in Machine Learning. However, recently, I have  been working on developing web/mobile applications. 
            </p>
            <p class="my-4">
              I recently graduated University of Toronto and currently looking for a full-time position.
              So feel free to reach out to me in case you'd be interested in working together.
            </p>
          </div>
          <div class="flex flex-row justify-center my-8">
            <div class="w-px-4 mx-8 w-1/4">
              <img src={process.env.PUBLIC_URL + '/myImage.jpg'} class="object-cover rounded-full"/>
            </div>
            <div class="w-px-4 mx-8 w-1/4">
              <img src={process.env.PUBLIC_URL + '/myImage.jpg'} class="object-cover rounded-full"/>
            </div>
          </div>
    </section>

    );
  }

}