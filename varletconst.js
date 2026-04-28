
//Declare a global variable and shadow it inside a function using both `var` and `let` to see how they behave
//differently when printing the variable inside and outside the function.

var globalBrowserVersion = "Chrome";
function getBrowserVersion() {
    if (globalBrowserVersion === "Chrome") {
        let browserVersion = "Local Shadowed Version";
        console.log("Inside function:", browserVersion);
    }
}

getBrowserVersion();
console.log("globalBrowserVersion:", globalBrowserVersion);

