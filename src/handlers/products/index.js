'use strict';

const { faker } = require('@faker-js/faker');
const { products } = require('../../utils/fakers');

module.exports.handler = async (event) => {
    const httpMethod = event.requestContext.http.method;

    if (httpMethod === 'GET') {
        if ((event.queryStringParameters && event.queryStringParameters.id) || (event.pathParameters && event.pathParameters.id)) {
            const id = event.queryStringParameters ? event.queryStringParameters.id : event.pathParameters.id
            if (id.length === 24) {
                const product = products(1)[0];
                product.id = id;
                return {
                    statusCode: 200,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        products: product,
                    }, null, 2),
                };
            } else {
                return {
                    statusCode: 404,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        message: 'Product not found',
                    }, null, 2),
                };
            }
        }
        if (event.queryStringParameters && event.queryStringParameters.amount) {
            const amount = parseInt(event.queryStringParameters.amount);
            if (parseInt(event.queryStringParameters.amount) < 50) {
                return {
                    statusCode: 200,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        products: products(amount),
                    }, null, 2),
                };
            } else {
                return {
                    statusCode: 406,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        message: 'Request less than 50 products',
                    }, null, 2),
                };
            }
        }
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                products: products(faker.number.int({ min: 2, max: 15 })),
            }, null, 2),
        };
    }

    if (httpMethod === 'POST') {
        const body = JSON.parse(event.body);
        if (body && body.name && body.category && body.price && body.description && body.image_url) {
            return {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: 'Product Created',
                    product: { id: faker.database.mongodbObjectId(), ...body }
                }, null, 2),
            };
        }
        else {
            return {
                statusCode: 400,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: 'Error Creating Product: Missing parameters.',
                }, null, 2),
            };
        }
    }

    if (httpMethod === 'PATCH' && event.pathParameters && event.pathParameters.id) {
        const body = JSON.parse(event.body);
        const product = products(1)[0];

        if (Object.keys(body).length > 0) {
            return {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: 'Product Updated',
                    product: { ...product, ...body, id: event.pathParameters.id }
                }, null, 2),
            };
        } else {
            return {
                statusCode: 400,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: 'Error Updating Product: Missing or empty parameters.',
                }, null, 2),
            };
        }
    }

    if (httpMethod === 'DELETE' && (event.queryStringParameters && event.queryStringParameters.id) || (event.pathParameters && event.pathParameters.id)) {
        const id = event.queryStringParameters ? event.queryStringParameters.id : event.pathParameters.id
        if (id.length === 24) {
            return {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: 'Product Deleted',
                }, null, 2),
            };
        } else {
            return {
                statusCode: 400,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: 'Error Deleting Product: Missing or empty parameters.',
                }, null, 2),
            };
        }
    }


    return {
        statusCode: 405,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'Method not allowed' }, null, 2),
    };
}