'use strict';

const { faker } = require('@faker-js/faker');
const { orders } = require('../../utils/fakers');

module.exports.handler = async (event) => {
    const httpMethod = event.requestContext.http.method;
    console.log(httpMethod);
    console.log(event.queryStringParameters)

    if (httpMethod === 'GET') {
        if ((event.queryStringParameters && event.queryStringParameters.id) || (event.pathParameters && event.pathParameters.id)) {
            const id = event.queryStringParameters ? event.queryStringParameters.id : event.pathParameters.id
            if (id.length === 24) {
                const Order = orders(1)[0];
                Order.id = id;
                return {
                    statusCode: 200,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        orders: Order,
                    }, null, 2),
                };
            } else {
                return {
                    statusCode: 404,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        message: 'Order not found',
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
                orders: orders(faker.number.int({ min: 2, max: 15 })),
            }, null, 2),
        };
    }

    if (httpMethod === 'POST') {
        const body = JSON.parse(event.body);
        if (body && body.user_id && body.order_date && body.items) {
            const calcPriceTotal = body.items.reduce((acc, item) => acc + parseFloat(item.price_per_unit), 0)
            console.log(calcPriceTotal);
            return {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: 'Order Created',
                    order: { id: faker.database.mongodbObjectId(), ...body, total_price: calcPriceTotal, status: 'pending' }
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
                    message: 'Error Creating Order: Missing parameters.',
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
                    message: 'Order Deleted',
                }, null, 2),
            };
        } else {
            return {
                statusCode: 400,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: 'Error Deleting Order: Missing or empty parameters.',
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