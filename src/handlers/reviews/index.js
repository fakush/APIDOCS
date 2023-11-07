'use strict';

const { faker } = require('@faker-js/faker');
const { reviews } = require('../../utils/fakers');

module.exports.handler = async (event) => {
    const httpMethod = event.requestContext.http.method;

    if (httpMethod === 'GET') {
        if ((event.queryStringParameters && event.queryStringParameters.id) || (event.pathParameters && event.pathParameters.id)) {
            const id = event.queryStringParameters ? event.queryStringParameters.id : event.pathParameters.id
            if (id.length === 24) {
                const review = reviews(1)[0];
                review.id = id;
                return {
                    statusCode: 200,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        reviews: review,
                    }, null, 2),
                };
            } else {
                return {
                    statusCode: 404,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        message: 'review not found',
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
                        reviews: reviews(amount),
                    }, null, 2),
                };
            } else {
                return {
                    statusCode: 406,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        message: 'Request less than 50 reviews',
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
                reviews: reviews(faker.number.int({ min: 2, max: 15 })),
            }, null, 2),
        };
    }

    if (httpMethod === 'POST') {
        const body = JSON.parse(event.body);
        if (body && body.product_id && body.user_id && body.rating && body.review_text) {
            return {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: 'review Created',
                    review: { id: faker.database.mongodbObjectId(), ...body, date: new Date() }
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
                    message: 'Error Creating review: Missing parameters.',
                }, null, 2),
            };
        }
    }

    if (httpMethod === 'PATCH' && event.pathParameters && event.pathParameters.id) {
        const body = JSON.parse(event.body);
        const review = reviews(1)[0];

        if (Object.keys(body).length > 0) {
            return {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: 'review Updated',
                    review: { ...review, ...body, id: event.pathParameters.id }
                }, null, 2),
            };
        } else {
            return {
                statusCode: 400,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: 'Error Updating review: Missing or empty parameters.',
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
                    message: 'Review Deleted',
                }, null, 2),
            };
        } else {
            return {
                statusCode: 400,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: 'Error Deleting review: Missing or empty parameters.',
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