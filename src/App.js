import Title from './components/Title'
import Counter from './components/Counter'

const App = () => {
	return (
		<div className="app">
			<Title priority={1}>
				Base react
			</Title>

			<Counter initialValue={10} maxValue={15} minValue={7} />
		</div>
	)
}

export default App