const LIST_IMG = document.querySelector(".list__img");
const LIST_BTN = document.querySelector(".content__btn");
const BTN = LIST_BTN.querySelector("button");
const LOADER = document.querySelector(".spinner");
const URL = "https://random.dog/woof.json";

BTN.addEventListener("click", getRandomImg);

async function getRandomImg() {
	const RESPONSE = await fetch(URL);
	const DATA = await RESPONSE.json();
	if (DATA.url.includes("mp4")) {
		getRandomImg();
	}
	LIST_IMG.innerHTML = `<img src="${DATA.url}" alt="Random Image">`;
}