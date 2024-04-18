const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {

 const filteredColors = colors.filter(c=> c==="черный" || c === "красный" || c==="желтый")
    return filteredColors.join("-")
}

console.log(createColorString());
