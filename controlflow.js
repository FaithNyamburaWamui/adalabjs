const personAge = (age) => {
    if(age>=18) {
        return "You are an adult"
    }
    else if(age>=13 && age<18){
        return "You are a teenager"

    }
    else{
        return "you are a child"
    }
   
}
console.log(personAge(10));

const greeting = (dayOfTheWeek)=>{
    switch(dayOfTheWeek){
        case "Monday":
        console.log("hello Monday");
        break;

        case "Teusday":
            console.log("Hello Teusday");
            break;

            case "Wednesday":
                console.log("Hello Wednesday");
                break;

                case "Thursday":
                    console.log("Hello Wednesday");
                    break;

                    case "Friday":
                        console.log("Hello Friday");
                        break;
                        case "Sarturday":
                            console.log("Hello Sarturday")
                            break;
                            case "Sunday":
                                console.log("Hello Sunday");
                                break;
                                default:
                                    console.log("Not the days of the week");


    }
};
greeting("Teusday");
greeting("Wednesday");