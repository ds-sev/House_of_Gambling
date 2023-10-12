console.log('ljkjk')

const blogElement = document.querySelector('.blog')

blogElement.addEventListener('click', () => console.log('XYZ'))

blogElement.scrollTop = 30;
blogElement.scrollLeft = -130;

console.log(blogElement.scroll)
