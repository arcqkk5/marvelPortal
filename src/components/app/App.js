import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import decoration from "../../resources/img/vision.png";

const App = () => {
  const [selectedChar, setSelectedChar] = useState(null);

  const onCharSelected = (id) => {
    setSelectedChar(id);
  };

  return (
    <div className="app">
      <AppHeader />
      <main>
        {/* 1 */}
        {/* <RandomChar />
        <div className="char__content">
          <CharList onCharSelected={onCharSelected} />
          <CharInfo charId={selectedChar} />
        </div>
        <img className="bg-decoration" src={decoration} alt="vision" /> */}

        {/* 2 */}
        <AppBanner />
        <ComicsList />
      </main>
    </div>
  );
};

export default App;
