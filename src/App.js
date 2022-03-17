import "./App.css";
import NavBar from "./components/navbar";
import PostList from "./components/postList";
import SearchBar from "./components/searchBar";

function App() {
	return (
		<div className="App">
			<NavBar />
			<div className="container">
				<SearchBar />
				<PostList />
			</div>
		</div>
	);
}

export default App;
