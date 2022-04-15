import React from "react";
import Nav from "./Nav";
import Tiles from './Tiles'

import hogs from "../porkers_data";
console.log("app.js-", hogs)
function App() {
	return (
		<div className="App">
			<Nav />
			<Tiles hogData = {hogs}/>
		</div>
	);
}

export default App;
