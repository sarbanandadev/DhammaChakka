export default function asideBar() {
  const asideTop = document.getElementById("asideTop");
  const asideBottom = document.getElementById("asideBottom");

  const top = [
    { alt: "Explore", src: "https://sarbanandadev.github.io/DhammaChakka/static/assets/icons/ftp.svg" },
    { alt: "Search", src: "https://sarbanandadev.github.io/DhammaChakka/static/assets/icons/search.svg" },
    { alt: "Dictionary", src: "https://sarbanandadev.github.io/DhammaChakka/static/assets/icons/book.svg" },
    { alt: "Apps", src: "https://sarbanandadev.github.io/DhammaChakka/static/assets/icons/apps.svg" },
  ];
  let bottom = [
    { alt: "User", src: "https://sarbanandadev.github.io/DhammaChakka/static/assets/icons/user.svg" },
    { alt: "Settings", src: "https://sarbanandadev.github.io/DhammaChakka/static/assets/icons/settings.svg" },
  ];


  top.forEach((item) => {
    let img = document.createElement("img");
    img.setAttribute("src", item.src);
    img.setAttribute("alt", item.alt);
    asideTop.appendChild(img);
  });

  bottom.forEach((item) => {
    let img = document.createElement("img");
    img.setAttribute("src", item.src);
    img.setAttribute("alt", item.alt);
    asideBottom.appendChild(img);
  });
}
