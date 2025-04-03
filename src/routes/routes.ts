import { Express } from 'express';
import express from 'express'
import customer from './customer.ts'
import product from './product.ts'
import order from './order.ts'
import auth from './auth.ts'

export default function (app: Express) {
    app
    .use(express.json())
    .use('/customers', customer)
    .use('/products', product)
    .use('/orders', order)
    .use('/auth', auth)

}