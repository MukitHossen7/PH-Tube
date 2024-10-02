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
  <div class="px-0 py-5 flex gap-4">
   <img class="w-10 h-10 rounded-full object-cover" src="${video.authors[0].profile_picture}" alt="">
   <div>
    <h2 class="font-bold text-lg mb-2">${video.title}</h2>
    <div class="flex items-center gap-2">
      <p class="text-sm  text-slate-500">${video.authors[0].profile_name}</p>
      <img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" alt="">
    </div>
   </div>
  </div>
      `;
    cardSection.append(card);
  });
};

loadCategory();
loadVideos();
