import React from 'react';

export const BrownieContext = React.createContext({});

export function BrownieProvider({children}) {
  const [brownies, setBrownies] = React.useState('Brownies!');
  return <BrownieContext.Provider value={brownies}>
    {children}
  </BrownieContext.Provider>
}


// pretend this is in another file
// import {BrownieContext, BrownieProvider} from './Context';

function App() {
  return <BrownieProvider>
    <div>
      <p>
        <FoodWeLike />
      </p>
    </div>
  </BrownieProvider>
}

function FoodWeLike() {
  const food = React.useContext(BrownieContext);
  return <b>{food}</b>;
}