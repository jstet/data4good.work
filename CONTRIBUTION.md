# Contribution
## General contribution process
Contribute to this repository by opening a pull request.
## Organizations
The table you see on the page is rendered with data coming from the file `data.json` located `src/lib/organizations/`.
### Edit an organization
To edit an organization, simply search for it in `data.json` and edit the relevant values.
### Add an organization
To add an organization, copy an entry of the array contained in `data.json`, for example
```
{
 "name": "&effect",
    "type": "Private company",
    "sector": "Public sector",
    "description": "Our mission is to make data science an integral part of public and social sector decision-making:\nData at the service of the public good. We create data products for more effective decision-making at the intersection of social science, data science, and software development. ",
    "link": "https://www.and-effect.com/",
    "data_tech": ["Data Engineering", "Data Analysis"]
}
```
Paste this object at the end of the array and overwrite the values. 