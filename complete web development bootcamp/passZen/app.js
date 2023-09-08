var keylist = "abcdefghijklmonpqurstvwxyz1234567890!@#$%^&*"
var tmp = ''
function generatepass(plength) {
    tmp = ''
    for(i = 0; p =plenght; i++){
        tmp+= keylist.charAt(Math.floor(Math.random()*keylist.length))
    }
    return tmp
}

function poplateform(enterlength){
    document.passGen.output.value = generatepass(enterlength)
}