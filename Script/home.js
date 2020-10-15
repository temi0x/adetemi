// navbar

let highlight;

function addClass(target) {
    target.classList.add('selector-item--active');
}

function selectItem(event) {
  const target = event.target;
  const items = document.querySelectorAll('.selector-item');
  const parent = document.querySelector('.selector');
  const targetRect = target.getBoundingClientRect();
  const parentRect = parent.getBoundingClientRect();
  
  items.forEach(el => el.classList.remove('selector-item--active'));

  highlight.style.left = `${targetRect.left - parentRect.left}px`;
  
  addClass(target);
  setHighlightWidth(target);
}

function setHighlightWidth(target = null) {
  const itemTarget = target || document.querySelector('.selector-item');
  const rect = itemTarget.getBoundingClientRect();
  
  addClass(itemTarget)
  
  highlight = document.querySelector('.highlight');
  highlight.style.width = `${rect.width}px`;
}

setHighlightWidth();