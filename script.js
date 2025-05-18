function switchTab(event, tabId, tabClass, tabPane) {
  const tabs = document.getElementsByClassName(tabClass);
  const contents = document.getElementsByClassName(tabPane);

  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }

  document.getElementById(tabId).style.display = "block";
  event.currentTarget.classList.add("active");
}