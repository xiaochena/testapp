import React, { useContext } from 'react';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const ThemeContext = React.createContext(themes.light);

const Son = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ background: theme.background, color: theme.foreground }}>
      Son
    </div>
  );
};

const Father = () => {
  return <Son />;
};

const ContextHook: React.FC = () => {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Father />
    </ThemeContext.Provider>
  );
};

export default ContextHook;
