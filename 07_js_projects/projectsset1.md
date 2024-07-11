## project 1 - colour changer

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( function(button) {
  button.addEventListener('click' ,function(e) {
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id
    }
  })
})

```

## project 2 - bmi calculator

``` javascript
    const form = document.querySelector('form')
//this use case will give an empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e) {
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height<0 || isNaN(height)){
    results.innerHTML = `Please give a valid height `
  }
  else if(weight === '' || weight<0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight `
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    let message = `<span>${bmi}</span>`

    if (bmi < 18.6) {
      message += ` - Under Weight`
    } else if (bmi < 24.9) {
      message += ` - Normal Range`
    } else {
      message += ` - Over Weight`
    }
    results.innerHTML = message
  }
})
```