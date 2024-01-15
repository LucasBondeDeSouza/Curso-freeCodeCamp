// Only change code below this line
function urlSlug(title) {
    return title
        .trim() // Remove espaços no início e no final
        .split(/\s+/)
        .map(word => word.toLowerCase())
        .join("-");
}
// Only change code above this line

const result = urlSlug(" Winter Is  Coming");
console.log(result); // "winter-is-coming"