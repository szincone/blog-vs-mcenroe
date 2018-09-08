'use strict'

const db = require('../db/dbHelper')

module.exports = {
    async getPosts (req, res, next) {
        try {
            res.status(200).json({
                status: true,
                posts: await db.getPost()
            })
        } catch (err) {
            next(err)
        }
    },

    async getPost (req, res, next) {
        try {
            res.status(200).json({
                status: true,
                post: await db.getPost(req.params.id)[0]
            })
        } catch (err) {
            next(err)
        }
    },

    async putPost (req, res, next) {
        try {
            res.status(200).json({
                status: true,
                ...await db.putPost(req.body)
            })
        } catch (err) {
            next(err)
        }
    },

    async addPost (req, res, next){ 
        try {
            res.status(200).json({
                status: true,
                ...await db.addPost(req.body)
            })
        } catch (err) {
            next(err)
        }
    },

    async deletePost (req, res, next){
        try {
            res.status(200).json({
                status: true,
                ...await db.delPost(req.params.id)
            })
        } catch (err) {
            next(err)
        }
    }
}