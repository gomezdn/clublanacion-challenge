# Fake landing page for Club La Nacion
This is a NextJS project that acts as a SWA that displays a header, a mocked slider component and two more sliders that feed on an API to get their data.

## API's endpoints:
- GET /api/accounts:
    - URL params:
        - filterField: `'haveVoucher' | 'tagName'`
        - filterValue: `string`
        - sortField: `'distance' | 'name'`
        - sortOrder: `'ascending' | 'descending'`
    - Example request:
        - `GET '/api/accounts?filterField=haveVoucher&filterValue=true&sortField=distance&sortOrder=ascending`
    - Example response:
        - { data: `[]`, error: `string`, nextPage: `number | null`, previousPage: `number | null`, totalPages: `number`, page: `number`}

## Run the project locally
- ### Prerequisites:
    - Node v22 or later

run `npm install`
then:

create and fill a .env file as shown in .env.example, with the link to the mock JSON that holds the accounts data

`npm run dev` serves a development server in localhost:3000

`npm run build && npm run start` builds and serves a production environment in localhost:3000

The API can be reached from `localhost:3000/api/accounts`