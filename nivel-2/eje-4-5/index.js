const $ = (tag, all = false) => {
  if (all === true) {
    return Array.from(document.querySelectorAll(tag))
  } else {
    return document.querySelector(tag)
  }
}
