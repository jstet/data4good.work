// Access the JSON data
console.log(organizationData);

// initialize table
var table = new Tabulator("#list", {
    data: organizationData, // assign data to table
    layout:"fitColumns",
    rowHeight:60,
    responsiveLayout:"hide",
    initialSort: [
        { // set the initial sort order of the data
            column: "Name",
            dir: "asc"
        },
    ],
    columnDefaults: {
        tooltip: true, // show tool tips on cells
    },
    columns: [
        {
            title: "Name",
            field: "Name",
            resizable: false
        },
        {
            title: "Type",
            field: "Type",
            resizable: false
        },
        {
            title: "Sector",
            field: "Sector",
            resizable: false
        },
        {
            title: "Description",
            field: "Description",
            resizable: false

        }, {
            title: "Link",
            field: "Link",
            formatter: "link",
            resizable: false
        }, {
            title: "Language requirements",
            field: "Language requirements",
            resizable: false
        }, {
            title: "How does this relate to Data4Good?",
            field: "How does this relate to Data4Good?",
            resizable: false
        },
    ]
});
