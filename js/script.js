// Toggle class active untuk toggle menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika toggle menu di klik
document.querySelector("#toggle-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const slider = document.querySelector(".slider");
const list = document.querySelector(".list");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

// Auto play slider
if (next) {
  next.addEventListener("click", () => {
    initSlider("next");
  });
}

if (prev) {
  prev.addEventListener("click", () => {
    initSlider("prev");
  });
}

let runAutoPlay = setTimeout(() => {
  if (next) {
    next.click();
  }
}, 6000);

const initSlider = (type) => {
  const sliderItems = list.querySelectorAll(".item");

  if (type === "next") {
    list.appendChild(sliderItems[0]);
    slider.classList.add("next");
  } else {
    const lastItemPosition = sliderItems.length - 1;
    list.prepend(sliderItems[lastItemPosition]);
    slider.classList.add("prev");
  }

  setTimeout(() => {
    slider.classList.remove("next");
    slider.classList.remove("prev");
  }, 2000);

  clearTimeout(runAutoPlay);
  runAutoPlay = setTimeout(() => {
    next.click();
  }, 6000);
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#toggle-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  // if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
  //   shoppingCart.classList.remove("active");
  // }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
