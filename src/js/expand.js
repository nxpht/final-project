export const expand = () => {
      // кнопки показать все / скрыть в гридах

  const expandBtns = document.querySelectorAll('.brand__more')

  expandBtns.forEach((btn) => {
    const expandText = btn.querySelector('span')
    const grid = document.getElementById(btn.dataset.target)
    btn.addEventListener('click', () => {
      grid.classList.toggle('is-expanded')
      btn.classList.toggle('brand__more--active')
      if (btn.classList.contains('brand__more--active')) {
        expandText.textContent = 'Скрыть'
      } else {
        expandText.textContent = 'Показать все'
      }
    })
  })
  
    // читать далее

  const pageExpandBtn = document.querySelector('.page__expand')
  const hiddenText = document.querySelector('.hidden')
  pageExpandBtn.addEventListener('click', () => {
    const pageExpandImg = pageExpandBtn.querySelector('img')
    const pageExpandSpan = pageExpandBtn.querySelector('span')
    hiddenText.classList.toggle('hidden')
    if (!hiddenText.classList.contains('hidden')) {
      pageExpandSpan.textContent = 'Скрыть'
      pageExpandImg.style.transform = 'rotate(180deg)'
    } else {
      pageExpandSpan.textContent = 'Читать далее'
      pageExpandImg.style.transform = 'rotate(0)'
    }
  })
}
