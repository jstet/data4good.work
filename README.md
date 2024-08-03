# data4good.work

A simple website containing a taxonomy and a list of organizations that leverage data to advance the Sustainable Development Goals.
´
## Motivation

The motivation behind this project is to provide an overview of organizations that are actively using data to tackle societal and environmental challenges. It can be challenging to find the right organization for those interested in pursuing a career in this area. This website aims to bridge that gap by offering a curated list of organizations, making it easier for individuals to find opportunities in the Data4Good sector.

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

## Content Contribution

The content of data4good.work is managed with static files that are part of the folder `src/lib/data/organizations`. 

### Edit Organization

1. To edit an organizations, first complete the dev setup described above and depending on your access rights fork this repo or create a branch. 

2. Then go to the corresponding foler and make the change.

3. After making your changes, test them with `npm run dev` and open a PR that one of the admins will review and merge.

### Add Organization

1. To add organizations, first complete the dev setup described above and depending on your access rights fork this repo or create a branch. 

2. Then you can either add files manually (simply copy an exising file and adjust the values), or run a script that will prompt you to provide necessary data and create the file automatically: 

    ```
    node scripts/add_org.js
    ```

3. After adding organizations, test your changes with `npm run dev` and open a PR that one of the admins will review and merge.








