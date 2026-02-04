let day= parseInt(prompt("enter the day"));
let time=parseInt(prompt("enter the time"));


if(time>=0 && time<24)
    {
if (time>=0 && time<12){
    console.log("good morning");
}
else if (time>=12 && time<18){
    console.log("good afternoon");
}

else if(time>=18 && time<24)
{
    console.log("good evening");
}
else{
    console.log("there is nothing");
}
}



switch(day){
case 1:
    
    console.log("it is sunday")
    break;

    case 2:
    
    console.log("it is monday")
    break;

    case 3:
        
        console.log("it is tuesday")
        break;

        case 4:
            
            console.log("it is wednesday")
            break;

            case 5:
            
                console.log("it is thursday")
                break;
                default:
                    console.log("there is no day");
}