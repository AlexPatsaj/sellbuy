// Constants
export const SELECT_STORE = 'GLOOCLE/NEARBY/SELECT_STORE';

export function selectStore(store){
	return {
		type:SELECT_STORE, 
		payload:store
	};
}