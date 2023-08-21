const palindromo = (str) => {
    const str2 = str.toLowerCase().replaceAll( " ","");
    let reverse = str2.split('').reverse().join('');
    return reverse === str2;
}

module.exports= {palindromo};
