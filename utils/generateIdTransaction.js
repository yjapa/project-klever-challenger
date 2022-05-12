const  generateIdTransaction = () => {
	const characters ='abcdefghijklmnopqrstuvwxyz0123456789';
	let result1= '';
	const charactersLength = characters.length;
	for ( let i = 0; i < 64; i++ ) {
		result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
	}

	return result1;
};

module.exports = generateIdTransaction;
