import { useState } from 'react'
import LeHeader from './components/Header';

function App() {
	const [MeClickCount, setMeClickCount] = useState(0); // Declare state and hook (array containing variable to be manipulated and function to manipulate said var) (inside useState I declare first val = 0 (it's alright if I don't declare anything though))

	function handleClick() { // use Captial for first letter
		setMeClickCount(MeClickCount + 1);
	}

	return(
		<> {/* the <><LeHeader/></> is html part*/}
			<LeHeader  MyWords ="Me loop list example"/>
			<button onClick={handleClick}>Count ({MeClickCount})</button>
		</>
	);
}

export default App
