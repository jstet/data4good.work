# data4good.work

A simple website containing a taxonomy and a  list of organizations that leverage data to advance the Sustainable Development Goals.


## Motivation

The motivation behind this project is to provide an overview of organizations that are actively using data to tackle societal and environmental challenges. It can be challenging to find the right organization for those interested in pursuing a career in this area. This website aims to bridge that gap by offering a curated list of organizations, making it easier for individuals to find opportunities in the Data4Good sector.

## Content Contribution

The content of data4good.work is managed with a Directus instance running at [cms.jstet.net](https://cms.jstet.net). To contribute content, you need an account. Write an E-Mail to mail@jstet.net and I will send you an invitation. 

The website is static and can be built either with a push to main or by selecting the manual deploy flow on the right side of the Organization collection in Directus. 

You can find some general information that partly applies to this websites CMS as well [here](https://docs.correlaid.org/wiki/infrastructure/directus-content-management-system).

If you don't want to add content yourself, write me an E-Mail or open an issue describing the changes you would suggest.

## Dev Setup

1. Clone Repo
2. Install packages
    ``` bash
    npm install
    ```
3. Set up pre commit hooks
    ``` bash
    npm run prepare
    ```
4. Create .env
    ```
    PUBLIC_API_URL=https://cms.jstet.net
    ```
## Content Contributors 

- 

### Sources

- [SDG Design Guide](https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Guidelines_AUG_2019_Final.pdf)







