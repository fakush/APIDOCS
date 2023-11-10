const postmanToOpenApi = require('postman-to-openapi')
const { exec } = require('child_process');

const postmanCollection = process.cwd() + '/docs/fake-backend-demo.postman_collection.json'
const outputSwaggerFile = process.cwd() + '/docs/fake-backend-demo.yml'

exec(`postman-to-markdown ${postmanCollection}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});



postmanToOpenApi(postmanCollection, outputSwaggerFile, { defaultTag: 'General' })
    .then(result => {
        console.log(`OpenAPI file created`)
    })
    .catch(err => {
        console.log(err)
    })

