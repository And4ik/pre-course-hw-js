
function strim() {
    let str = "zzzzyzz"
    return (
        str.includes("y")
        ?   console.log("нашел")
            : console.log("заблудился")
    )
}
strim()