import React from "react";
import "./App.css";
import profileData from "./data/profile.json";
import NavBar from "./components/navbar";
import PostList from "./components/postList";
import SearchBar from "./components/searchBar";
import Profile from "./components/profile";

class App extends React.Component {
	// Section Windows
	sections = ["post", "profile"];

	// State
	state = {
		loading: true,
		section: this.sections[0],
		search: "",
	};

	// Show Loading
	showLoading() {
		this.changeLoading(false);
		return (
			<div>Loading...</div>
		);
	}

	// Change Loading State
	changeLoading(loadingState) {
		setTimeout(() => {
			this.setState({ loading: loadingState });
		}, 3000);
	}

	// Show Sections
	showSection() {
		if (this.state.section === this.sections[0]) {
			if (this.state.loading) {
				return (this.showLoading());
			} else {
				return (
					<>
						<SearchBar 
							value={this.state.search} 
							onSearch={(value) => { this.changeSearch(value); }}
						/>
						<PostList postFilter={this.state.search}/>
					</>
				);
			}
		} else if (this.state.section === this.sections[1]) {
			return (
				<Profile 
					avatar={profileData.avatar} 
					userName={profileData.userName} 
					bio={profileData.bio}
				/>
			);
		}
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