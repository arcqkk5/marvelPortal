import "./charList.scss";
import { Component } from "react/cjs/react.production.min";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

class CharList extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    charList: [],
    loading: true,
    error: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.marvelService
      .getAllCharacters()
      .then(this.onCharListLoaded)
      .catch(this.onListError);
  }

  onCharListLoaded = (charList) => {
    this.setState({ charList, loading: false });
  };

  onListError = () => {
    this.setState({ loading: false, error: true });
  };

  renderItemCharList(array) {
    const items = array.map((item) => {
      let classNamesImg = {};
      if (item.thumbnail.indexOf("image_not_available") > -1) {
        classNamesImg = { objectFit: "unset" };
      }

      return (
        <li
          className="char__item"
          key={item.id}
          onClick={() => this.props.onCharSelected(item.id)}
        >
          <img src={item.thumbnail} alt={item.name} style={classNamesImg} />
          <div className="char__name">{item.name}</div>
        </li>
      );
    });
    return items;
  }

  render() {
    const { charList, loading, error } = this.state;
    const items = this.renderItemCharList(charList);
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? items : null;

    return (
      <div className="char__list">
        <ul className="char__grid">
          {errorMessage}
          {spinner}
          {content}
        </ul>
        <button className="button button__main button__long">
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

export default CharList;
