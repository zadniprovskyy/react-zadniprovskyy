import React from 'react';


export class AboutMe extends React.Component {
  render () {
    return (
        // <div class="bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-teal-500">asdfasdf</div>
    <section class="bg-black m-10" id="about">
          <h2 class="text-center text-white text-3xl text-blue-400 m-5">About Me</h2>
          <div class="flex flex-row justify-around">
            <div class="text-blue-200 text-xl px-4 m-2 w-1/2 m-auto">
              <p class="py-3">Hey! My name is Yegor and I am a software engineer based in Toronto.</p>
              <p class="py-3">
                I am interested in Machine Learning. However, recently, I have  been working on developing web/mobile applications. 
              </p>
              <p class="py-3">
                I recently graduated University of Toronto and currently looking for a full-time position.
                So feel free to reach out to me in case you'd be interested in working together.
              </p>
            </div>
            <div class="bg-black w-px-4 mx-2 my-auto w-1/3">
              <img src={process.env.PUBLIC_URL + '/myImage.jpg'} class="object-cover rounded-full"/>
            </div>

          </div>
    </section>

    );
  }

}