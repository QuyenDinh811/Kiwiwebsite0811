function login()
{
  let a = username.value 
  let b = password.value 
  if (a == "KIWI" && b== "0811")
  {
    window.open("Home.html")
    document.getElementById(compiler).style.display="block"
  }
  else 
    document.write("không hợp lệ")
}
