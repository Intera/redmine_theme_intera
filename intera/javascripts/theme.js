addEventListener("load", (event) => {
  // rename the new object button from "+" to "New" because it is clearer and a larger clickable area.
  const anchor = document.querySelector("#main-menu a#new-object")
  if (!anchor) return
  const lang = document.body.parentElement.lang
  if ("de" == lang) anchor.innerHTML = "Neu"
  else if ("en" == lang) anchor.innerHTML = "New"
})
