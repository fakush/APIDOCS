'use strict';

const { faker } = require('@faker-js/faker');
const { users } = require('../../utils/fakers');

module.exports.handler = async (event) => {
    const httpMethod = event.requestContext.http.method;

    if (httpMethod === 'GET') {
        if ((event.queryStringParameters && event.queryStringParameters.id) || (event.pathParameters && event.pathParameters.id)) {
            const id = event.queryStringParameters ? event.queryStringParameters.id : event.pathParameters.id
            if (id.length === 24) {
                const user = users(1)[0];
                user.id = id;
                return {
                    statusCode: 200,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        users: user,
                    }, null, 2),
                };
            } else {
                return {
                    statusCode: 404,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        message: 'User not found',
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
                        users: users(amount),
                    }, null, 2),
                };
            } else {
                return {
                    statusCode: 406,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        message: 'Request less than 50 users',
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
                users: users(faker.number.int({ min: 2, max: 15 })),
            }, null, 2),
        };
    }

    if (httpMethod === 'POST') {
        const body = JSON.parse(event.body);
        if (body && body.username && body.email && body.password && body.role) {
            return {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: 'user Created',
                    user: { id: faker.database.mongodbObjectId(), ...body }
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
                    message: 'Error Creating user: Missing parameters.',
                }, null, 2),
            };
        }
    }

    if (httpMethod === 'PATCH' && event.pathParameters && event.pathParameters.id) {
        const body = JSON.parse(event.body);
        const user = users(1)[0];

        if (Object.keys(body).length > 0) {
            return {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: 'user Updated',
                    user: { ...user, ...body, id: event.pathParameters.id }
                }, null, 2),
            };
        } else {
            return {
                statusCode: 400,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: 'Error Updating user: Missing or empty parameters.',
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
                    message: 'User Deleted',
                }, null, 2),
            };
        } else {
            return {
                statusCode: 400,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: 'Error Deleting user: Missing or empty parameters.',
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