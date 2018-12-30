const j2s = require('joi-to-swagger');
const schema = require('./app/schemas/cat-schema');


const { swagger, components } = j2s(schema);
console.info(swagger, components);
