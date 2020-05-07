console.log("Request Data...");

setTimeout(() => {
	console.log("Preparing Data...");

	const BACKEND_DATA = {
		server: "aws",
		port: 2000,
		status: "working"
	};

	setTimeout(() => {
		BACKEND_DATA.modified = true;
		console.log("Data received", BACKEND_DATA);

		setTimeout(() => {
			BACKEND_DATA.thirdSetTimeout = true;
			console.log("Data received", BACKEND_DATA);
		}, 4000);
	}, 3000);
}, 2000);

const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
		console.log("Preparing Data...");
			const BACKEND_DATA = {
				server: "aws",
				port: 2000,
				status: "working"
			};
			resolve(BACKEND_DATA);
		}, 2000);
});

promise
	.then(data => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				data.modified = true;
				resolve(data);
			}, 2000);
		})
	})
	.then(userData => {
		console.log("User Data received", userData);
	})
	.catch(error => {console.error("Error: ", error);})
	.finally(() => {console.log("Finally");})


const wait = ms => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), ms)
	})
}

// Данный промис будет выполнен только после завершения всех промисов в массиве
Promise.all([wait(2000), wait(5000)])
	.then(() => {
		console.log("All promises");
	})

// Данный промис будет выполнен сразу после выполнения первого промиса, который находится в массиве
Promise.race([wait(2000), wait(5000)])
	.then(() => {
		console.log("Race promises")
	})

const URL = "https://jsonplaceholder.typicode.com/photos";

const test = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Preparing Data...");
		fetch(URL)
			.then(response => resolve(response.json()));
	}, 900);
	setTimeout(() => {
		reject(new Error("time's up"));
	}, 1100);
});

test
	.then(userData => console.log(userData))
	.catch(err => console.error(err));

