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
<<<<<<< HEAD



=======
>>>>>>> c19072eaf4cf21d36474e03558898bfdef564edc

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







const delay = ms => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), ms);
	})
};

const URL = "https://jsonplaceholder.typicode.com/users";

function getPosts() {
	console.log("Preparing posts...");
	return delay(2000)
		.then(() => fetch(URL))
		.then(response => response.json())
};

getPosts()
	.then(data => console.log("Your posts", data))
	.catch(err => console.error(err));


async function getPosts() {
	console.log("Подготовка данных...");
	try {
		await delay(1000);
		const response = await fetch(URL);
		const data = await response.json();
		console.log(data);
	}
	catch (err) {
		throw new Error("Не удалось получить данные")
	}
};
getPosts();

const getUser = async (id) => {
	console.log("Получение данных пользователя...");
	try {
		await delay(1000);
		const RESPONSE = await fetch(`${URL}/${id}`);
		const DATA = await RESPONSE.json();
		return DATA;
	}
	catch (error) {
		throw new Error("Не удалось получить данные пользователя")
	}
};

class UserData {
	constructor(url) {
		this.url = url;
	}
	async getUser(id) {
		try {
			const RESPONSE = await fetch(`${this.url}/users/${id}`);
			const DATA = await RESPONSE.json();
			return DATA;
		}
		catch (error) {
			throw new Error("Не удалось получить данные пользователя");
		}
	}

	async getPost(userId) {
		try {
			const RESPONSE = await fetch(`${this.url}/posts?userId=${userId}`);
			const DATA = await RESPONSE.json();
			return DATA;
		}
		catch (error) {
			throw new Error("Не удалось получить записи пользователя");
		}
	}

	async getComment(postId) {
		try {
			const RESPONSE = await fetch(`${this.url}/comments?postId=${postId}`);
			const DATA = await RESPONSE.json();
			return DATA;
		}
		catch (error) {
			throw new Error("Не удалось получить комментарии пользователя");
		}
	}
};

(async () => {
	const URL = "https://jsonplaceholder.typicode.com";
	const userData = new UserData(URL);
	
	try {
		const USER = await userData.getUser(1);
		const USER_POST = await userData.getPost(USER.id);
		const USER_COMMENT = await userData.getComment(USER_POST[0].id);
		console.log(USER);
		console.log(USER_POST);
		console.log(USER_COMMENT);
	}
	catch (error) {
		console.error(error);
	}
})();
