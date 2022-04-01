import React from "react";
import "./App.css";
import profileData from "./data/profile.json";
import NavBar from "./components/navbar";
import PostList from "./components/postList";
import SearchBar from "./components/searchBar";
import Profile from "./components/profile";
import Login from "./components/login";

class App extends React.Component {
	// Section Windows
	sections = ["post", "profile", "login"];

	// State
	state = {
		section: this.sections[0],
		search: "",
		loginOk: false,
	};

	// Show Sections
	showSection() {
		if (this.state.loginOk === true) {
			if (this.state.section === this.sections[0]) {
				return (
					<>
						<SearchBar 
							value={this.state.search} 
							onSearch={(value) => { this.changeSearch(value); }}
						/>
						<PostList 
							postFilter={this.state.search}
							noLogin={() => { 
								this.changeLoginOk(false);
								this.changeSection(this.sections[2]);
							}}
						/>
					</>
				);
			}
			
			if (this.state.section === this.sections[1]) {
				return (
					<Profile 
						avatar={profileData.avatar} 
						userName={profileData.userName} 
						bio={profileData.bio}
					/>
				);
			}
		}

		if (this.state.section === this.sections[2] || this.state.loginOk !== true) {
			// Clean Local Storage Token if any
			if (localStorage.getItem("token")) {
				localStorage.removeItem("token");
			}

			return (
				<Login 
					onLoginComplete={() => { 
						this.changeLoginOk(true); 
						this.changeSection(this.sections[0]);
					}} 
				/>
			);
		}
	}

	// Change Login State
	changeLoginOk(value) {
		this.setState({ loginOk: value });
	}

	// Change Sections State
	changeSection(sectionWindow) {
		this.setState({ section : sectionWindow});
	}

	// Change Search State
	changeSearch(value) {
		this.setState({ search : value });
	}

	render() {
		return (
			<div className="App">
				<NavBar 
					onLogoClick={() => { this.changeSection(this.sections[0]); }}
					onProfileClick={() => { this.changeSection(this.sections[1]); }}
				/>
				<div className="container">
					{ this.showSection() }
				</div>
			</div>
		);
	}
}

export default App;