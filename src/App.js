import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
import NavBar from "./components/navbar";
import PostList from "./components/postList";
import SearchBar from "./components/searchBar";
import Profile from "./components/profile";
import Login from "./components/login";

function App() {

	// Navigate
	let navigate = useNavigate();

	// State
	const [search, setSearch]   		= useState("");
	const [loginOk, setLoginOk] 		= useState(false);
    const [currentUser, setCurrentUser] = useState({});

	// Log In
	function logIn(){
		setLoginOk(true);
		navigate("/");
	}

	// Log Out
	function logOut() {
		setLoginOk(false);
		setCurrentUser({});

		// Clean Token
		if (localStorage.getItem("token")) {
			localStorage.removeItem("token");
		}

		navigate("/login");
	}

	// Get User Info
	useEffect(() => {
		if (localStorage.getItem("token") || loginOk === true) {
			const url   = "https://three-points.herokuapp.com/api/users/624b466215cfe30016c9f500";
			const token = localStorage.getItem("token");

			axios.get(url, { headers: { Authorization: `Bearer ${token}` } })
				.then(res => { 
					setCurrentUser(res.data);
				})
				.catch(err => {
					logOut();
				})
		} else {
			logOut();
		}
    }, [navigate]);

	return (
		<div className="App">
			<NavBar />
			<div className="container">
				<Routes>
					<Route 
						path="/" 
						element={
							<>
								<SearchBar 
									value={ search } 
									onSearch={ (value) => { setSearch(value); } }
								/>
								<PostList 
									postFilter={ search }
									noLogin={ () => { logOut(); } }
								/>
							</>
						} 
					/>
					<Route
						path="/profile"
						element={
							<Profile 
								avatar={ currentUser.avatar } 
								userName={ currentUser.username } 
								bio={ currentUser.bio }
								onLogout={ () => { logOut(); } }
							/>
						}
					/>
					<Route
						path="/login"
						element={
							<Login 
								onLoginComplete={ () => { logIn(); } } 
							/>
						}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;