// converts time function
function getTimeString(times) {
  const date = new Date(times * 1000);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // return `${year}year ${month}month ${hours}hrs ${minutes}min ago`;
  return `${hours}hrs ${minutes}min ago`;
}

//Video based on Catagory [ params ] function
const loadCategoryVideos = (id) => {
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
      let activeBtn = document.getElementById(`btn-${id}`);
      activeBtn.classList.add("active");
      displayVideos(data.category);
    })
    .catch((error) => console.log(error));
};

// view-details-function-start
const viewDetailsLoad = async (videoId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`
  );
  const data = await res.json();
  displayViewDetails(data.video);
};
// view-details-function-end

// display-view-Details-start
const displayViewDetails = (viewData) => {
  const modalContainer = document.getElementById("modal-container");
  modalContainer.innerHTML = `
    <img src="${viewData.thumbnail}"/>
    <p class="pt-3 text-slate-500 font-semibold">${viewData.description}</p>
  `;
  document.getElementById("my_modal").showModal();
};
// display-view-Details-end

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
    const div = document.createElement("div");
    div.innerHTML = `
      <button id="btn-${item.category_id}" class="btn category-btn" onclick="loadCategoryVideos(${item.category_id})">${item.category}</button>
    `;
    showCategory.appendChild(div);
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
  cardSection.innerHTML = "";
  if (videos.length == 0) {
    cardSection.classList.remove("grid");
    cardSection.innerHTML = /*html*/ `
        <div class="max-w-xs mx-auto flex gap-5 justify-center items-center flex-col pt-16">
        <img src="./images/Icon.png">
        <h3 class="font-bold text-2xl text-center">Oops!! Sorry,There is no content here</h3>
        </div>
    `;
  } else {
    cardSection.classList.add("grid");
  }
  videos.forEach((video) => {
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = /*html*/ `
      <figure class="w-full h-52 relative">
    <img src="${
      video.thumbnail
    }" alt = "Videos" class="w-full h-full object-cover" />
   
   ${
     video.others.posted_date?.length === 0
       ? ""
       : `  <span class="absolute bg-black text-white font-thin text-xs p-1 rounded-md right-2 bottom-2">${getTimeString(
           video.others.posted_date
         )}</span>`
   }
  
  </figure>
  <div class="px-0 py-5 flex gap-4">
   <img class="w-10 h-10 rounded-full object-cover" src="${
     video.authors[0].profile_picture
   }" alt="">
   <div>
    <h2 class="font-bold text-lg mb-2">${video.title}</h2>
    <div class="flex items-center gap-2">
      <p class="text-sm  text-slate-500">${video.authors[0].profile_name}</p>
    ${
      video.authors[0].verified === true
        ? `<img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" alt=""> `
        : ""
    }
      
    </div>
    <button onclick="viewDetailsLoad('${
      video.video_id
    }')" class="btn btn-error px-5 mt-2">Details</button>
   </div>
  </div>
      `;
    cardSection.append(card);
  });
};

loadCategory();
loadVideos();
