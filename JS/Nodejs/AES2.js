var CryptoJS = require("crypto-js");


var str = '3CE4D0F0C2C4D8AC4D48E9E359302A53FC8137F7283F80D0F17A843F81511289';
// 密钥 16 位
var key = 'ddjfkl792374$%%^ddjfkl792374$%%^';
// 初始向量 initial vector 16 位
var iv = '0123456789abcdefddjfkl792374$%%^';
// key 和 iv 可以一致
key = CryptoJS.enc.Utf8.parse(key);
iv = CryptoJS.enc.Utf8.parse(iv);
console.log("key :", key);
console.log("iv :", iv);
// 加密
var encrypted = CryptoJS.AES.encrypt(str, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
});

// 转换为字符串
encrypted = encrypted.toString();
console.log("encrypt:", encrypted);
// mode 支持 CBC、CFB、CTR、ECB、OFB, 默认 CBC
// padding 支持 Pkcs7、AnsiX923、Iso10126
// NoPadding、ZeroPadding, 默认 Pkcs7, 即 Pkcs5

// 解密
var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
});

// 转换为 utf8 字符串
decrypted = CryptoJS.enc.Utf8.stringify(decrypted);
console.log("decrypted: ", decrypted);
