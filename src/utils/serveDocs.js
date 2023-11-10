const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const app = express();
const port = 3000;

const swaggerDocument = YAML.load('./docs/fake-backend-demo.yml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`Swagger UI is available at http://localhost:${port}/api-docs`);
});
