const accountId =  144553
let accountEmail = "jayant@google.com"
var accountPassword = "12345"
accountCity = "Abohar"
let accountState;
// accountId = 2 // not allowed

accountEmail = "jay@google.com"
accountPassword = "2134"
accountCity = "delhi"

console.log(accountId);

/*
prefer not to use var 
because of issue in block space and functional space
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])