export const tabsFn = () => {
  const tabs = document.querySelectorAll('.tabs__item')

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      for (let t of tabs) {
        if (t.classList.contains('active')) {
          t.classList.remove('active')
        }
      }
      tab.classList.add('active')
    })
  })
}
