import './App.css';
import TestimonialCard from './components/TestimonialCard';

function App() {
	return (
		<>
			<TestimonialCard
				name='Sarah Dole'
				handle='@sarahdole'
				quote={`I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!`}
			/>
		</>
	);
}

export default App;
