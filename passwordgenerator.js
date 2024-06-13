function generatePassword(length,includeSpecialChars){


const charset = "abcdefghijklmnopqrstuvwxyz";
const specialCharset = "!@#$%^&*()_+~'";
const allChars = includeSpecialChars ? charset + specialCharset : charset;
let random = 0;
//let result = 0;
let password = "";

for (let i = 0; i < length; i++) {
    random = Math.floor(Math.random() * allChars.length)
    //result = allChars.charAt(random);
    //password = password.concat(result)
    password += allChars[random]
      
}
    return password;

}

console.log("Nova senha aleatória> " + generatePassword(5,true));