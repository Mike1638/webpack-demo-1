import x from './x.js'
console.log(x);
import png from './assets/1.jpg'

const div = document.querySelector('.app1')
div.innerHTML = `
<img src="${png}">
`

const button =document.createElement('button')
button.innerHTML= '懒加载'
div.appendChild(button)
button.onclick = ()=>{
      const promise =  import('./lazy.js')
      promise.then((module)=>{
      const fn =module.default
      fn()
      },()=>{})
}