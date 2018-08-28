var CryptoJS = require("crypto-js");

const key = CryptoJS.enc.Utf8.parse('1234123412ABCDEF');
const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412');


// 加密
function Encrypt(word) {
    var encrypted = CryptoJS.AES.encrypt(word, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    // 转换为字符串
    encrypted = encrypted.toString();
    return encrypted;
}

// 解密
function Decrypt(word) {
    var decrypted = CryptoJS.AES.decrypt(word, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    // 转换为 utf8 字符串
    decrypted = CryptoJS.enc.Utf8.stringify(decrypted);
}

export default {
    Decrypt ,
    Encrypt
}
