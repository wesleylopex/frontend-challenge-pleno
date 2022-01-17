import { Header } from '../Header/Header.js'

function Utils () {
  function initHeader () {
    const header = Header()
    header.start()
  }

  function initFeatherIcons () {
    feather.replace()
  }

  function start () {
    initHeader()
    initFeatherIcons()
  }

  return {
    start
  }
}

export { Utils }
