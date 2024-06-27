const KRIPTO_KEY = '4+l21DK&fcdg#GDVgt5623gGG=caD==='

function Encrypt(variable, key){
    let text
    if(typeof variable !== 'string'){
        text = String(variable)
        const ENCRYPT_TEXT = CryptoJS.AES.encrypt(text, key).toString()
        return ENCRYPT_TEXT
    }
    else{
        text = variable
        const ENCRYPT_TEXT = CryptoJS.AES.encrypt(text, key).toString()
        return ENCRYPT_TEXT
    }
}

function Decrypt(encrypt_text, key){
    const DECRYPT_TEXT = CryptoJS.AES.decrypt(encrypt_text, key).toString(CryptoJS.enc.Utf8)
    return DECRYPT_TEXT
}
