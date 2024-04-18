const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {

    const filteredColors = colors.filter((color, index) => ![0,2,5].includes(index) )
    return filteredColors.join("-");
}

console.log(createColorString());
