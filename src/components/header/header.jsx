import React from 'react';
import "../../styles/spaceBackground.css";


const appendScript = (scriptToAppend) => {
  const script = document.createElement("script");
  script.src = scriptToAppend;
  script.async = true;
  document.body.appendChild(script);
}

export class Header extends React.Component {
  render () {
    return (
      <div class="container demo">
          <div class="content">
              <div id="large-header" class="large-header height-10">
                  <canvas id="demo-canvas"></canvas>
                  <h1 class="main-title">Yegor Zadniprovskyy</h1>
              </div>
          </div>
      </div>
    );
  }

  componentDidMount () {
    appendScript("https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js");
    appendScript("https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js");
    appendScript("https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo.js");
  }


}