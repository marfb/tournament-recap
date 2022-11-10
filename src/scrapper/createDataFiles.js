/* eslint-disable import/no-unresolved */
const fs = require('fs');
const path = require('path');

const [folder] = process.argv.slice(2);
const arr = [];

fs.readdir(path.join(process.cwd(), `../../public/data/${folder}`), (readDirError, fileNames) => {
	if (readDirError) throw console.log(readDirError.message);
	// Loop fileNames array
	fileNames.forEach((filename) => {
		// Read file content
		fs.readFile(
			path.join(process.cwd(), `../../public/data/${folder}`, `${filename}`),
			(readError, data) => {
				if (readError) throw console.log(readError.message);
				// Log file content
				const output = JSON.parse(data);
				arr.push(output);
				fs.writeFileSync(
					path.join(process.cwd(), `../../public/data/${folder}`, `all-${folder}-data.json`),
					JSON.stringify(arr),
					(writeError) => {
						if (writeError) throw console.log(writeError.message);
					}
				);
			}
		);
	});
});
