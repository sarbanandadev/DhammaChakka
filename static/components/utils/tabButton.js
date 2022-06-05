export default function tabButton() {
  const tabButtons = document.getElementById("tabButtons");

  const tabBtns = [
    { href: "/", title: "Welcome" },
    { href: "/posts", title: "Posts" },
    { href: "/settings", title: "Settings" },
  ];

  tabBtns.forEach((item) => {
    const a = document.createElement("a");
    a.setAttribute("class", "tab-link");
    a.setAttribute("href", item.href);
    a.setAttribute("data-link", "");
    a.textContent = item.title;
    tabButtons.appendChild(a);
  });
}
