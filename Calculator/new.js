
function anagram(x,y){
	if(x.sort === y.sort)
    {
		console.log("The strings are anagrams.");
    }
	else
    {
		console.log("The strings aren't anagrams.");
    }	
}
let a ="listen";
let b ="silent";
anagram(a,b);

