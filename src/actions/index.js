export function selectBook(book) {
	//console.log('A book has been selected:', book.title);

	// selectBook is an Action Creator, it needs to return an action,
	// an object with a type of property.
	return{
		type: 'BOOK_SELECTED', 
		payload: book
	};
}