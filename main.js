let object= {
    names: "Afnan",
    email: "afnan_tw@hotmail.com",
    id : 3837366636,
    avilable: false,
    check: function() {
        if (this.avilable == false)
            console.log("avilable");
        else(
            console.log("Not avilable")
        );
    },
    address: {
        cityone: {
            city1: "Taif",
            street:"hassan-bin",
        },
        citytwo: {
            city2:"Jeddah",
            street:"alnzha",
        },
        citythree :{
            city3:"Makkah",
            street:"alawli",
        },
    },
    skills :{
        skillsOne:["one","two","three","four"],
    }
}
//print user ob
console.log(object);
// print name
console.log(object.names);
// - modify the value of property id and print
object.id = "92827636"
console.log(object.id);
//- delete the property email and print
delete object.email
console.log(object.email);
//test you function  by changing the value to Available ,print the function 
console.log(object.check());
//print the address object 
console.log(object.address);
//print one of the keys inside the city object 
console.log(object.address.cityone);
//print one of the keys inside the city object 
console.log(object.skills.skillsOne[2]);
