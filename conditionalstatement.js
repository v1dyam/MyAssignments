function launchBrowser(){

    let browser ="chrome"
    if (browser ==="chrome")

     {
        console.log("launch chrome browser");
    }
   else {
     console.log("launch edge browser");

   }
}
launchBrowser();


function testtype(runTests) {
  switch(runTests) {
    case "smoke":
      console.log("run smoke tests");
      break;
    case "sanity":
      console.log("run sanity tests");
      break;
    case "regression":
      console.log("run regression tests");
      break;
    default:
      console.log("default run smoke tests");
  }
}

testtype("smoke");
testtype("sanity");
testtype("regression");
testtype("others");
