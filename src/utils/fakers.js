const { faker } = require('@faker-js/faker');
// import { faker } from '@faker-js/faker'

const products = (amount) => {
    result = []
    for (let i = 0; i < amount; i++) {
        result.push({
            id: faker.database.mongodbObjectId(),
            name: faker.commerce.product(),
            category: faker.commerce.department(),
            brand: faker.animal.insect(),
            price: faker.commerce.price({ min: 100, max: 200 }),
            description: faker.commerce.productDescription(),
            image_url: faker.image.url(),
            quantity_in_stock: faker.number.int({ min: 10, max: 100 })
        })
    }
    return result
}

const users = (amount) => {
    result = []
    const roles = ['admin', 'user', 'editor'];
    const randomIndex = faker.number.int({ min: 0, max: roles.length - 1 });
    for (let i = 0; i < amount; i++) {
        result.push({
            id: faker.database.mongodbObjectId(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            role: roles[randomIndex]
        })
    }
    return result
}

const reviews = (amount) => {
    result = []
    for (let i = 0; i < amount; i++) {
        result.push({
            id: faker.database.mongodbObjectId(),
            product_id: faker.database.mongodbObjectId(),
            user_id: faker.database.mongodbObjectId(),
            rating: faker.number.int({ min: 1, max: 5 }),
            review_text: faker.lorem.sentence(),
            date: faker.date.past({ years: 1 }),
        })
    }
    return result
}

const orders = (amount) => {
    result = []
    const roles = ['pending', 'shipped', 'delivered'];
    const randomIndex = faker.number.int({ min: 0, max: roles.length - 1 });
    const orderItems = () => {
        const items = []
        for (let i = 0; i < faker.number.int({ min: 1, max: 8 }); i++) {
            items.push({
                product_id: faker.database.mongodbObjectId(),
                rating: faker.number.int({ min: 1, max: 5 }),
                price_per_unit: faker.commerce.price({ min: 100, max: 2000 })
            })
        }
        return items
    }
    const items = orderItems()
    for (let i = 0; i < amount; i++) {
        result.push({
            id: faker.database.mongodbObjectId(),
            user_id: faker.database.mongodbObjectId(),
            order_date: faker.date.past({ years: 1 }),
            items: items,
            total_price: items.reduce((acc, item) => acc + parseFloat(item.price_per_unit), 0),
            status: roles[randomIndex]
        })
    }
    return result
}

module.exports = { products, users, reviews, orders }