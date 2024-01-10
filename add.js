//Default export
// export default -  can only have one default  export in a JS file.


// export default function addTwo(a,b){
//     console.log(a+b)
// }
// Can also be in this form
function addTwo(a,b){
    console.log(a+b)
}
export default addTwo;


// Named export - unlike the default export, in names export, we can have as many named export as we want. and it's also used to export certain parts or portion of our file 
export function multAB(a,b) {
    console.log(a * b);

}
// In named export when exporting two functions it will be in this form E.g
// export {mult, add };