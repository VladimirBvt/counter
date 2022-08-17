import { useState } from 'react'
import Title from '../Title'

const Counter = ({ initialValue, maxValue, minValue }) => {
	const [count, setCount] = useState(initialValue)

	const className = 'counter'

	console.log(count)

	const handleIncrementClick = () => {
		setCount((prevCount) => {
			if (prevCount < maxValue) {
				return ++prevCount
			} else {
				return prevCount
			}
		})
	}

	const handleDecrementClick = () => {
		setCount((prevCount) => {
			if (prevCount > minValue) {
				return --prevCount
			} else {
				return prevCount
			}
		})
	}

	const handleResetClick = () => {
		setCount(initialValue)
	}

	return (
		<div className={className}>
			<Title 
				className={`${className}__title`} 
				priority={3}
			>
				Count: {count}
			</Title>

			<button 
				className={`${className}__button`} 
				onClick={handleIncrementClick}
				disabled={count === maxValue}
			>
				+
			</button>

			<button 
				className={`${className}__button`}
				onClick={handleDecrementClick}
				disabled={count === minValue}
			>
				-
			</button>

			<button
				onClick={handleResetClick}
			>
				Reset
			</button>
		</div>
	)
}

Counter.defaultProps = { initialValue: 0, minValue: 0 }
export default Counter