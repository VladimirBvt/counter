const Title = (props) => {
	if (props.priority === 2) {
		return <h2>{props.content}</h2>
	} else if (props.priority === 3) {
		return <h3>{props.content}</h3>
	} else if (props.priority === 4) {
		return <h4>{props.content}</h4>
	} else if (props.priority === 5) {
		return <h5>{props.content}</h5>
	} else if (props.priority === 6) {
		return <h6>{props.content}</h6>
	}
	return (
		<h1>{props.content}</h1>
	)
}

export default Title