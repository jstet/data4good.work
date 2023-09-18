import os
import json
import glob
from jinja2 import Template

# List to store the combined data
combined_data = []

# Path to the directory containing the JSON files
json_files_path = 'organizations/*.json'

content_folder = "content"
output_folder = "docs"

# Iterate through each JSON file
for file_path in glob.glob(json_files_path):
    with open(file_path, 'r') as file:
        # Read and parse the JSON data
        data = json.load(file)
        # Append the data to the combined list
        combined_data.append(data)

# Write the combined data to a JavaScript file
output_file_path = f'{output_folder}/data/data.js'
with open(output_file_path, 'w') as output_file:
    output_file.write(f'const organizationData = {json.dumps(combined_data)};')


# Read the wrapper template file
with open('templates/wrapper.html.jinja', 'r') as file:
   wrapper_template_file = file.read()

# Create a Jinja template object
wrapper_template = Template(wrapper_template_file)

# Loop through the content folder
for filename in os.listdir(content_folder):
    if filename.endswith('.jinja'):
        content_filepath = os.path.join(content_folder, filename)
        
        with open(content_filepath, 'r') as content_file:
            content_html = content_file.read()
        
        # Render the template with the content HTML
        final_html = wrapper_template.render(content=content_html)
        
        # Write the final HTML to a new file
        output_filepath =f"{output_folder}/{filename}".replace(".jinja", "")
        with open(output_filepath, 'w') as output_file:
            output_file.write(final_html)