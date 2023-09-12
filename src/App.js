
import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { ImageHolder } from './components/imageholder/ImageHolder';
import { Review } from './components/review/Review';

function App() {

  const [darkmode, setDarkmode] = useState(false)

  const body = document.querySelector("body")

  const toggleMode = () => {
    
    darkmode && setDarkmode(false)
    !darkmode && setDarkmode(true)

 
  }

  const newdarkmode = () => {

    if(darkmode){
      body.style.setProperty("--neutral","#F4F4F4")
    body.style.setProperty("--neutral2","##444444")
    body.style.setProperty("--neutral3","##444444")

    }


    

  }

  useEffect(() => {
    newdarkmode()
  
    
  }, [darkmode])
  

  return (
    <div className="App">
      <Header toggleMode={toggleMode} darkmode={darkmode} />
      <ImageHolder />
      <Review />
    </div>
  );
}

export default App;
