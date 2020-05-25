const firstName = "Mateusz";
const age = 27;

console.log(firstName);
console.log(age);

alert(`Siemanko z tej strony ${firstName}`);

function calculet(age, firstName) {
  console.log(`Siema, nazywam się ${firstName} i mam ${age} lat`);
}

const calculate = (myNumber) => myNumber * 7;
console.log(calculate(8));

const navigation = document.querySelector(".navigation__link--home-page--js");
const appearMouse = () => {
  navigation.classList.add("yellow-class");
};
navigation.addEventListener("mouseenter", appearMouse);

const dissapearMouse = () => {
  navigation.classList.remove("yellow-class");
};
navigation.addEventListener("mouseleave", dissapearMouse);

const navigation_2 = document.querySelector(".navigation__link--notes--js");
const appearMouse_2 = () => {
  navigation_2.classList.add("yellow-class");
};
navigation_2.addEventListener("mouseenter", appearMouse_2);

const dissapearMouse_2 = () => {
  navigation_2.classList.remove("yellow-class");
};
navigation_2.addEventListener("mouseleave", dissapearMouse_2);

const navigation_3 = document.querySelector(".navigation__link--tasks--js");
const appearMouse_3 = () => {
  navigation_3.classList.add("yellow-class");
};
navigation_3.addEventListener("mouseenter", appearMouse_3);

const dissapearMouse_3 = () => {
  navigation_3.classList.remove("yellow-class");
};
navigation_3.addEventListener("mouseleave", dissapearMouse_3);

const topp = document.querySelector(".top--js");
const appearMouse_4 = () => {
  topp.classList.add("yellow-class");
};
topp.addEventListener("mouseenter", appearMouse_4);

const dissapearMouse_4 = () => {
  topp.classList.remove("yellow-class");
};
topp.addEventListener("mouseleave", dissapearMouse_4);
