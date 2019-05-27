/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isIsomorphic () {
    var s = document.getElementById('s').value;
    var t = document.getElementById('t').value;
  
    var result = true;

    if (s.length === t.length) {
        var bank1 = [];      //the bank is to mean that it a store 
        var bank2 = [];

        for (var i=0; i<s.length; i++) {
            var dep1 = s[i];   // the dep is to mean that its the last character (a deposit)
            var dep2 = t[i];
        
            // If the character's last seen position doesn't match up, then not isomorphic.
            if (bank1[dep1] !== bank2[dep2]) {
                result = false;
                break;
            }
            else {
                // Store the last seen position of this character.
                bank1[dep1] = i;
                bank2[dep2] = i;
            }
        }
    }
    else {
        result = false;
    }

    //return result;
    //console.log(result);
    document.getElementById("output").innerHTML = "Are the two strings isomorphic?. : " + result; 
}