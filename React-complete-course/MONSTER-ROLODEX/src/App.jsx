import { Component } from "react";
import { SearchBox } from "./components/search-box/search-box.component";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name
        .toLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });

    return (
      <div className="App">
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <h1>Monsters Rolodex</h1>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
