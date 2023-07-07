//way 1
function getCount(str) {
    return str.split(' ').filter(function (num) {
        return num != ''
    }).length;
}

//way2
function getCount(str) {
    return str.split(' ').length
}
var string = 'LinuxHint is the best Website for learning skills';
console.log('Total Words in String: ' + getCount(string));



// function countWords(s){
//     s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
//     s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
//     s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
//     return s.split(' ').filter(function(str){return str!="";}).length;
//     //return s.split(' ').filter(String).length; - this can also be used
// }