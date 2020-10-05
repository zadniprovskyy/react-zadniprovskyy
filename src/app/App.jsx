import React from 'react';
import { Header, Menu, AboutMe, Projects, Footer, Social , Work} from 'components';

function App() {
  return (
    <div class="bg-black">
      <Menu />
      <Header />
      <AboutMe />
      <Work />
      <Projects />
      <Footer />
      <Social />
      {/* <Social /> */}
    </div>
  );
}

export default App;