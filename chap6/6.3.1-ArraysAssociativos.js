let addr = "";
let customer = {address0 : "Rua 1", 
                address1 : "Rua 2", 
                address2 : "Rua 3", 
                address3 : "Rua 4"};

for(let i = 0; i < 4; i++) {
 addr += customer[`address${i}`] + "\n";
 console.log(customer[`address${i}`] + "\n");
}

