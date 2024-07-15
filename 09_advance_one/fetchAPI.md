# fetch api

## intro
- fetch API included in nodejs in 2022 only. Before this , fetch was there but in 
browser only.

- Before fetch api, we used to get responses through XMLHttpRequest xhr which was no doubt 
good but for large web based projects, wasn't that efficient.

- when fetch introduced, syntax got reduced 
for eg. 
fetch("some url").then( (response) => {
    //Do something with the response
}).catch(err){
    console.log("Unable to fetch - ",err)
}


- fetch return promise , fetch() promise only rejects when a network error is encountered
A fetch() promise does not reject on HTTP errors (404 , etc)


- If in a js code , fetch() is there , and some other setTimeout etc is there, fetch()
results will appear first always. Even if setTimeout has 1 sec delay and fetch too has 1 sec
delay, fetch results will appear before it. This is because fetch() calls back to a special
queue called Micro task queue/ priority queue and this queue sends its task before everything into Call stack
of JS engine.


## Internal mechanism 

- response = fetch('something')

- fetch internal mechanism works in 2 parts : one is reserving data space
in variables and memories , other is web browser/node.

- lets say , first is Data which reserves space in memory. Data is just a name, you can call it anything
Two arrays are there i.e. onFulfilled[] , onRejection[], again names can be different at different books
onFulfilled is resolve of promise and onRejection is rejection of promise. We aren't allowed to push
directly in these arrays.

- in second part , netwrok request goes from web broweser / node based API .Two things can happen
, if there is any response to the network request, it always goes to onFulfilled[] and if network request
cannot be fulfilled , it goes to onRejection[]. 

- Even if we get errors like 404 , they goes to onFulfilled[], because, network request completed
then only we came to know that there is this error called 404.

- Data was initially empty, when either of onFulfilled[] or onRejection[] is done, it fills 
Data and then when Data fills , it is responsibility of Data to fulfil our variable named response