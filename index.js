function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var lists = [...document.querySelectorAll('.ranked-list')]
  lists.forEach(function(element) {
    let elements = [...element.querySelectorAll('li')]
    elements.forEach(function(li) {
      li.innerHTML = `${parseInt(li.innerHTML) + n}`
    })
  })
}

function deepestChild() {
  var elementsArray = [...document.querySelector('main').children]
  var results = []

  var deepest
  var greatestDepth = loopDown(elementsArray[0])[1]
  elementsArray.forEach(function(element) {
    let elementChild = loopDown(element)[0]
    let childDepth = loopDown(element)[1]
    if (childDepth > greatestDepth) {
      deepest = elementChild
      greatestDepth = childDepth
    }
  })
  return deepest
}

function loopDown(element) {
  for (var i = 1; i < 10; i++) {
    if (element.children.length === 0) {
      return [element, i]
    } else {
    element = element.children[0]
    }
  }
}
