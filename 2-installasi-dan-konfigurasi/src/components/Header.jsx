
// Example state and hook
function LeHeader({MyWords}) { // use Captial for first letter (destructurization)
    return (<h1>This is header from function {MyWords ? MyWords : "Me set default cause' no value"}</h1>);
}

export default LeHeader;