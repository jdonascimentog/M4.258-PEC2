/**
 * Import dependencies from node_modules
 * see commented examples below
 */
import * as bootstrap from "bootstrap";
/**
 * Write any other JavaScript below
 */

+(function () {
  const university = "UOC " + bootstrap.Alert.VERSION;

  console.log(`Hello, ${university}!`);

  openMenu = function () {
    var x = document.getElementById("nav");
    if (x.className === "header__nav") {
        x.className += " responsive";
    } else {
        x.className = "header__nav";
    }
};

})();
