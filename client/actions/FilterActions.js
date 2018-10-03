export const setFilterAction = (name, value) => {
	return {
		'type':'setFilter',
		name,
		value
	};
}

export const clearAllAction = () => {
	return {
		'type':'clearAll'
	};
}