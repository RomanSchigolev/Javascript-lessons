const LIST_IMG = document.querySelector(".list__img");
const LIST_BTN = document.querySelector(".content__btn");
const BTN = LIST_BTN.querySelector("button");
const LOADER = document.querySelector(".spinner");
const URL = "https://random.dog/woof.json";

BTN.addEventListener("click", getRandomImg);

async function getRandomImg() {
	try {
		const RESPONSE = await fetch(URL);
		const DATA = await RESPONSE.json();
		if (DATA.url.includes("mp4") || DATA.url.includes("webm")) {
			getRandomImg();
		}
		LIST_IMG.innerHTML = `<img src="${DATA.url}" alt="Random Image">`;
	}
	catch (err) {
		throw new Error("Something get wrong", err);
	}
};