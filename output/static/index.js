// Access the JSON data
console.log(organizationData);

//initialize table
var table = new Tabulator("#example-table", {
    data:organizationData, //assign data to table
    autoColumns:true, //create columns from data field names
}); 