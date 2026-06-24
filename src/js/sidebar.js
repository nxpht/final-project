export const sidebar = () => {
  const sidebar = document.querySelector('.sidebar')
  const menuBtn = document.getElementById('burger')
  const crossBtn = sidebar.querySelector('.nav__btn')
  const sidebarLinks = sidebar.querySelectorAll('.sidebar__link')
  const overlay = document.querySelector('.sidebar__overlay')

  const open = () => {
    sidebar.classList.add('active')
    overlay.classList.add('sidebar__overlay--active')
  }
  const close = () => {
    sidebar.classList.remove('active')
    overlay.classList.remove('sidebar__overlay--active')
  }
  menuBtn.addEventListener('click', open)
  crossBtn.addEventListener('click', close)
  overlay.addEventListener('click', close)

  sidebarLinks.forEach((link) => {
    link.addEventListener('click', () => {
      for (let l of sidebarLinks) {
        if (l.classList.contains('sidebar__link--active')) {
          l.classList.remove('sidebar__link--active')
        }
      }
      link.classList.add('sidebar__link--active')
    })
  })
}
