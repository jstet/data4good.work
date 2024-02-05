export const indexQuery = `
query {
	Organizations {
		name
		url
		type{
			id
            framework{
                name
                abbreviation
            }
            emphasis{
                name
                abbreviation
            }
		}
		cause
		office_locations_country
		description
	}
	Organization_Types{
		framework{
			name
			abbreviation
		}
		emphasis{
			name
			abbreviation
		}
		description 
	}
}
`;
