// remote/src/App.js
import React from 'react';
import { GlobalTheme, System, FakeNav } from 'arktheme';
import useHostStore from "host/hostStore";
import Core from './Core';

export const App = () => {
  const pageTitle = useHostStore((state) => state.pageTitle);

  return (
      <GlobalTheme>
        <FakeNav />
        <Core />
        <System appName={'Boilerplate'} active={true} devMode={true} />
      </GlobalTheme>
  );
};

export default App;
