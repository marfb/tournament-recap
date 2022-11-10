/* eslint-disable import/no-unresolved */
const fs = require('fs');
const axios = require('axios');
const path = require('path');

const [playerId] = process.argv.slice(2);

const options = {
	method: 'GET',
	url: 'https://transfermarket.p.rapidapi.com/players/get-profile',
	params: {id: `${playerId}`, domain: 'com'},
	headers: {
		'X-RapidAPI-Key': '4ef0cad4c2mshec2517e85d7ef46p1c1c0cjsn015ca6322b2b',
		'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com',
	},
};

axios
	.request(options)
	.then((response) => {
		const {data} = response;
		const {playerProfile} = data;
		const {playerName} = playerProfile;
		const fileName = playerName
			.split(' ')
			.map((name) =>
				name
					.toLowerCase()
					.normalize('NFD')
					.replace(/[\u0300-\u036f]/g, '')
			)
			.join('-');
		fs.writeFile(
			`${path.join(__dirname, `../../public/data/${fileName}.json`)}`,
			JSON.stringify(data),
			(err) => {
				if (err) {
					console.log('err --->', err);
					throw new Error('Something went wrong writing the file.');
				}
				console.log('JSON written to file. Contents:', JSON.stringify(data));
			}
		);
	})
	.catch((error) => {
		console.error(error);
	});
