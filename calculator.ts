interface MultiplyValues {
    value1: number;
    value2: number;
}


const multiplier = (a: number, b: number, printText: string) => {
    console.log(printText, a * b);
}

const parseArguments = (args: string[]) : MultiplyValues => {
    console.log("arguments", args);
    if(args.length <4)
    throw new Error('Not enogh arguments');

    if(args.length>4)
    throw new Error('Too many arguments');

    if((isNaN(Number(args[2]))) ||  (isNaN(Number(args[3])))){
    throw new Error('Args are not numbers');
    }
    else{
        return {
            value1: Number(args[2]),
            value2: Number(args[3])
        }
    }
}

try{
    const {value1, value2} = parseArguments(process.argv);
    multiplier(value1, value2, `The result of ${value1} * ${value2} is:`);
}
catch(error: unknown){
    if(error instanceof Error)
        console.log(error.message);
}