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
	Data4Good_Definition{
		content
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
