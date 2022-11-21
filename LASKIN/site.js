
function GetFirstField()
{
    const val = [];
    val[0] = document.getElementById("a1_0");
    val[1] = document.getElementById("a1_1");
    val[2] = document.getElementById("a1_2");

    return val;
}
function GetSecondField()
{
    const val = [];
    val[0] = document.getElementById("a2_0");
    val[1] = document.getElementById("a2_1");
    val[2] = document.getElementById("a2_2");

    return val;
}
var field1 = [1, 1, 1], field2 = [1, 1, 1];
operator = '+';
function UpdateFirstField()
{
    //alert("hi is this thing on");

    const val = GetFirstField();
    ovl = document.getElementById("output_val");

    
    ovl.innerHTML = "&nbsp;&nbsp;{ ";
    for(i = 0; i < 3; i++){
        ovl.innerHTML += val[i].value + (i != 2 ? ", " : " ");
        fValue = parseFloat(val[i].value);

        if(isNaN(fValue) == true){
            ovl.innerHTML = "Error: field[0][" + i + "]: '" + val[i].value + "' is not a number!";
            return false;
        }
        field1[i] = fValue;
    }
    ovl.innerHTML += " }</br>";

    return true;

}
function UpdateSecondField()
{
    //alert("hi is this thing on");

    const val = GetSecondField();
    ovl = document.getElementById("output_val");

    
    ovl.innerHTML += "-     { ";
    for(i = 0; i < 3; i++){
        ovl.innerHTML += val[i].value + (i != 2 ? ", " : " ");
        fValue = parseFloat(val[i].value);

        if(isNaN(fValue) == true){
            ovl.innerHTML = "Error: field [1][" + i + "]: '" + val[i].value + "' is not a number!";
            return false;
        }
        field2[i] = fValue;
    }
    ovl.innerHTML += "}";

    return true;

}
function _SyntaxError()
{
    return !UpdateFirstField() || !UpdateSecondField(); 
}
function GetResult()
{
    if(_SyntaxError()){
       // ovl.innerHTML += "\nUnable to calculate due to errors!";
        return;
    }

    ovl = document.getElementById("output_val");

    ovl.innerHTML += "<hr style=\"width:30%;margin-left:0\"></hr>"

    op = [];  


    switch(operator)
    {
        case '+':
            op =  [ 
            field1[0] + field2[0], 
            field1[1] + field2[1], 
            field1[2] + field2[2]];
            break;
        case '-':
            op =  [ 
            field1[0] - field2[0], 
            field1[1] - field2[1], 
            field1[2] - field2[2]];
            break;
        case '*':
            op =  [ 
            field1[0] * field2[0], 
            field1[1] * field2[1], 
            field1[2] * field2[2]];
            break;
            case '/':
            op =  [ 
            field1[0] / field2[0], 
            field1[1] / field2[1], 
            field1[2] / field2[2]];
            break; 
        default:
            operator = 'A';
            break;
    }

    ovl.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    ovl.innerHTML += op[0] + ", " + op[1] + ", " + op[2];
}
function setOperation(char)
{
    
    switch(char)
    {
        case '+':
            //alert("+");
            operator = '+';
            break;
        case '-':
            operator = '-';
            break;
        case '*':
            operator = '*';
            break;
         case '/':
            operator = '/';
            break; 
        default:
            operator = 'A';
            break;
    }
    setOperationText(operator);
    GetResult();
}
function setOperationText()
{
   // alert("helo")
    ovl = document.getElementById("dropbtn2");

    ovl.innerHTML = "Operation ( " + operator + " )";

    
}