const API = "https://jsonplaceholder.typicode.com/posts";
const contentElm = document.querySelector(".content__container");
const listPostElm = document.getElementById("list_post");
const btnFetch = document.getElementById("btn_fetch");
const btnCreate = document.getElementById("btn_create");
const btnContainerElm = document.querySelector(".button__container");
const mainElm = document.querySelector(".main");
const modalElm = document.getElementById("modal");
const closeModalElm = document.getElementById("close_modal");
const submitBtn = document.getElementById("btn_submit");

const id = document.getElementById("id");
const userID = document.getElementById("userID");
const title = document.getElementById("title");
const body = document.getElementById("body");

const fetchAPI = () => {
  let postArr = [];
  fetch(API)
    .then((response) => response.json())
    .then((data) =>
      data.forEach((item) => {
        const liElm = document.createElement("li");
        const idElm = document.createElement("span");
        const idUserElm = document.createElement("div");
        const bodyItemElm = document.createElement("div");
        const titleElm = document.createElement("h3");
        const textElm = document.createElement("p");

        idElm.innerHTML = item.id;
        idUserElm.innerHTML = item.userId;
        titleElm.innerHTML = item.title;
        textElm.innerHTML = item.body;

        liElm.classList.add("content__item");
        idElm.classList.add("content__item__id");
        idUserElm.classList.add("content__item__userId");
        titleElm.classList.add("content__item__title");
        textElm.classList.add("content__item__text");

        liElm.appendChild(idElm);
        liElm.appendChild(idUserElm);
        bodyItemElm.appendChild(titleElm);
        bodyItemElm.appendChild(textElm);
        liElm.appendChild(bodyItemElm);

        listPostElm.appendChild(liElm);
      })
    );
  contentElm.classList.add("active");
  mainElm.classList.remove("none-data");
  mainElm.classList.add("has-data");
  btnContainerElm.classList.add("change");
  setTimeout(() => {
    contentElm.classList.remove("active");
  }, 2000);
};

const createPost = () => {
  const data = {
    userId: userID.value,
    id: id.value,
    title: title.value,
    body: body.value,
  };

  fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      modalElm.classList.remove("open");

      const liElm = document.createElement("li");
      const idElm = document.createElement("span");
      const idUserElm = document.createElement("div");
      const bodyItemElm = document.createElement("div");
      const titleElm = document.createElement("h3");
      const textElm = document.createElement("p");

      idElm.innerHTML = id.value;
      idUserElm.innerHTML = userID.value;
      titleElm.innerHTML = title.value;
      textElm.innerHTML = body.value;

      liElm.classList.add("content__item");
      idElm.classList.add("content__item__id");
      idUserElm.classList.add("content__item__userId");
      titleElm.classList.add("content__item__title");
      textElm.classList.add("content__item__text");

      liElm.appendChild(idElm);
      liElm.appendChild(idUserElm);
      bodyItemElm.appendChild(titleElm);
      bodyItemElm.appendChild(textElm);
      liElm.appendChild(bodyItemElm);

      listPostElm.appendChild(liElm);

      userID.value = "";
      id.value = "";
      title.value = "";
      body.value = "";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

btnFetch.addEventListener("click", () => fetchAPI());
btnCreate.addEventListener("click", () => {
  modalElm.classList.add("open");
});

closeModalElm.addEventListener("click", () => {
  modalElm.classList.remove("open");
});

submitBtn.addEventListener("click", () => createPost());
