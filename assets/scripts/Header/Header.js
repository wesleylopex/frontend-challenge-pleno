function Header () {
  const elements = {
    header: document.querySelector('header'),
    nav: document.querySelector('#nav'),
    burger: document.querySelector('#burger')
  }

  function initNavbar () {
    if (!elements.burger) return false

    elements.burger.addEventListener('click', function () {
      this.classList.toggle('active')
      document.body.classList.toggle('overflow-y-hidden')
    })
  }

  function hideHeaderOnScrollDown () {
    let prevScrollPosition = window.pageYOffset

    window.addEventListener('scroll', function () {
      if (!elements.header) return false

      const currentScrollPosition = window.pageYOffset
      const headerHeight = elements.header.clientHeight

      if (prevScrollPosition > currentScrollPosition || currentScrollPosition < headerHeight) {
        elements.header.style.top = '0'
      } else {
        elements.header.style.top = `-${headerHeight}px`
      }

      prevScrollPosition = currentScrollPosition
    })
  }

  function setHeaderSpace () {
    if (!elements.header || !elements.nav) return false

    const { width } = window.screen

    const headerHeight = elements.header.clientHeight

    if (width < 1024) {
      elements.nav.style.top = `${headerHeight}px`
      elements.nav.style.height = `calc(100vh - ${headerHeight}px)`
    } else {
      elements.nav.style.top = '0px'
      elements.nav.style.height = 'auto'
    }

    // const underHeaderElement = elements.header.nextElementSibling
    // if (underHeaderElement) {
    //   underHeaderElement.style.marginTop = `${headerHeight}px`
    // }
  }

  function onResize () {
    function onDocumentResize () {
      setTimeout(setHeaderSpace, 100)
    }

    window.addEventListener('resize', onDocumentResize)
  }

  function setBgColorByScrollPosition () {
    setup()

    window.addEventListener('scroll', function () {
      setup()
    })

    function setup () {
      if (window.scrollY === 0) {
        elements.header.classList.add('header-top')
      } else {
        elements.header.classList.remove('header-top')
      }
    }
  }

  function start () {
    initNavbar()
    hideHeaderOnScrollDown()
    setHeaderSpace()
    onResize()
    setBgColorByScrollPosition()
  }

  return {
    start
  }
}

export { Header }
