import React from "react";
import Nav from "./Nav";
import Main from "./Main";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav hogs={hogs}/>
			<Main />
		</div>
	);
}

export default App;
