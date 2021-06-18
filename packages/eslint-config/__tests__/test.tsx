import React, { useState, useEffect } from 'react';
import type { FC } from 'react';

const App: FC = () => {
  const [val, setVal] = useState('');

  useEffect(() => {
    const nextVal = val + 2 ;
    setVal(nextVal);
  }, [val]);

  return <div onClick={()=>setVal(val+1)}>Foo</div>;
};

export default App;
