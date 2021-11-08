const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() { 
    cats.shift()
}


function appendCat(name) {
    const coolCats = [...cats]
    coolCats.push(name)
    return coolCats
}

function prependCat(name) {
    const coolCats = [...cats]
    coolCats.unshift(name)
    return coolCats
}

function removeLastCat() {
    const coolCats = [...cats]
    coolCats.pop()
    return coolCats
}

function removeFirstCat() {
    const coolCats = [...cats]
    coolCats.shift()
    return coolCats
}