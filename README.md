# API Document Generator

This generator is built with Handlebars.js library. Runs on Node Server.
This is a light weight API document generator uses a very less dependencies such as yamljs, handlebarsjs. Generates the API document in seconds.


## How it works?

1. Reads the YAML schema for a file.
2. Applies to Handlebars template.
3. Generate the final document.

## How to create YAML schema for a resource?

Look at the `example/input-files/items.yml`.

## Where to configure the URLs, Endpoints etc.,?

Everything is configured in `config.json`.


## Initial setup for generating the API documentation?

1. Clone the repository
2. cd `api-doc-generator`
3. `npm install`
4. Write a YML file for a every source as in the `example/input-files`
5. All configurations are done in the `config.json`. Refer `config-sample.txt` for the sample values.


## How to Generate Document?

`./generate_doc {yml_file_source_file_path}`  =>  `build/index.html`

Eg: ./generate_doc /example/input-files/
