<!--
function validate1()
{
if ( document.form1.name.value == "" )
 {
 alert ( "Please fill in your first name." );
 document.form1.name.focus();
 return false;
}
else if ( document.form1.name2.value == "")
 {
 alert ( "Please fill in your second name." );
 return false;
 }
else if ( document.form1.email.value == "" )
 {
 alert ( "Please fill in your Email Address." );
 return false;
 }
else if (document.form1.email.value !="")
var string1= document.form1.email.value
if (string1.indexOf("@")==-1)
{
alert("Please input a valid email address!")
return false;
}
else if ( document.form1.pword.value == "" )
{
 alert ( "Please fill in your password." );
 return false;
 }
else if (document.form1.pword.value.length < 5)
 {
alert("Must enter a password 7 characters long.");
 return false;
 }
else if (( document.form1.gender[0].checked == false ) && (
document.form1.gender[1].checked == false ))
 {
alert ( "Please specify your gender." );
return false;
 }
else if (( document.form1.package[0].checked == false ) && (
document.form1.package[1].checked == false ))
 {
alert ( "Please specify your package." );
return false;
 }
else if ( document.form1.continent.selectedIndex == 0 )
 {
alert ( "Please select your continent." );
return false;
}
return true;
}
//-->