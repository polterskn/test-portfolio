const person = document.querySelector(".person");
const laptop = document.querySelector(".laptop");
const user0 = document.querySelector(".user0");
const ipad = document.querySelector(".ipad");
const user1 = document.querySelector(".user1");
const iphonex = document.querySelector(".iphonex");
const user2 = document.querySelector(".user2");

const hola = document.querySelector("#hola-section");
const proyectos = document.querySelector("#proyectos-section");
const hablemos = document.querySelector("#hablemos-section");

const headerBtn = document.querySelector(".header__bottom--btn");
const introBtn = document.querySelector(".main__intro--btn");
const formBtn = document.querySelector(".main__form--btn");

const img = [person, laptop, user0, ipad, user1, iphonex, user2];

const viewport = window.matchMedia("(min-width: 1023px)");

function vpChange(vp) {
  if (vp.matches) {
    resizeEl("desktop");
  } else {
    resizeEl("mobile");
  }
}

function resizeEl(size) {
  img.forEach((el) => {
    let route = `./res/img/${size}/${el.className}-${size}.png`;
    el.setAttribute("src", route);
  });
}

function locate(el, btn) {
  let observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting === true) {
        btn.classList.add("selected");
      } else {
        btn.classList.remove("selected");
      }
    },
    { threshold: [1] }
  );

  observer.observe(el);
}

vpChange(viewport);
viewport.addListener(vpChange);

locate(hola, headerBtn);
locate(proyectos, introBtn);
locate(hablemos, formBtn);
