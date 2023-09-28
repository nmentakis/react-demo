import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { CatList } from './components/CatList';
import { CatCreator } from './components/CatCreator';
import { useState } from 'react';


/* JSX is React syntax */

function App() {
  // const catNames = ["Midnight", "Fluffy", "Scratch", "Walter", "Mittens", "Max"];
  const [catNames, updateCatNames] = useState([]);


  // const catElements = [];

  // for (let name of catNames) {
  //   catElements.push(<li>Nik has seen the cat with name: {name}</li>)
  // }

  const addCat = (catName) => {
    // console.log("We are doing great in CatCreator");
    // catNames.push(catName);
    const updatedNames = catNames.concat([catName])

    updateCatNames(updatedNames);
  }


  let noCatsMessage = <h3>There are no cats yet! ADD SOME CATS!</h3>
  let jsxToShow;

  if (catNames.length !== 0) {
    jsxToShow = <CatList catNames={catNames} />;
  } else {
    jsxToShow = noCatsMessage;
  }

  return (
    <div>
      <Header />
      {jsxToShow}

      {/* { catNames.length !== 0 ? <CatList catNames={catNames} /> : noCatsMessage } */}
      <CatCreator addCat={addCat} />
    </div>
  );

}

export default App;
