//加密
UnicodeEncoding encoding = new UnicodeEncoding();
byte[] PasswordBytes = encoding.GetBytes(password); //将密码转换为字节数组RSACryptoServiceProvider
crypt = new RSACryptoServiceProvider(); //RSA加密算法，非对称
PasswordBytes=crypt.Encrypt(password ,false); //加密字节数组，这是加密后的密码值，放入数据库中的表字段中。
string key=crypt.ToXmlString(true); //输出密钥为XML格式的字符串，且包含私钥，这个字符串要作为数据库表中的一个字段同用户的密码放在一起。



//解密
RSACryptoServiceProvider crypt=new RSACryptoServiceProvider(); //已随机生成了一个密钥对
crypt.Clear();//毁掉当前密钥对
crypt.FromXmlString(key); //输入密钥对，key是从数据库表字段中读取的那个XML格式的字符串，即密钥字段PasswordBytes=crypt.Decrypt(password ,false);//解密字节数组，返回原始密码给用户
