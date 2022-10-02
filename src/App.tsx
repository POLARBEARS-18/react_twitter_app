import { FC } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from 'Home';
import { TwitterHome } from 'Apps/TwitterApp/components/TwitterHome';

const App: FC = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/twitter_home" element={<TwitterHome />} />
      </Routes>
    </BrowserRouter>
  </div>
);
export default App;
