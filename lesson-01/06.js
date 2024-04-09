
function strim() {
    let str = "zzzzyzz";
    return str.includes("y") ? "нашел" : "заблудился";
}

console.log(strim());