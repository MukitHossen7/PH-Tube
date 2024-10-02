//Create Dynamic Category Button section

const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data.categories))
    .catch((error) => console.log(error));
};

const displayCategory = (categories) => {
  const showCategory = document.getElementById("showCategory");
  categories.map((item) => {
    console.log(item);
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;
    showCategory.appendChild(button);
  });
};
// Create Dynamic Video Sections
const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error));
};

const displayVideos = (videos) => {
  const cardSection = document.getElementById("card-section");
  videos.forEach((video) => {
    console.log(video);
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = /*html*/ `
      <figure class="w-full h-52">
    <img src="${video.thumbnail}" alt = "Videos" class="w-full h-full object-cover" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
      `;
    cardSection.append(card);
  });
};

loadCategory();
loadVideos();
