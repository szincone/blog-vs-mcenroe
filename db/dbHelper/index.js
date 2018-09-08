"use strict";

const db = require("../dbConfig");

module.exports = {
  async getPosts() {
    return await db(`Post`).select();
  },

  async getPost(id) {
    return await db(`Post`)
      .where({
        id: id
      })
      .select();
  },

  async putPost(post) {
      return await db(`Post`).where({
          id: post.id
      }).update({
          content: post.content,
          title: post.title,
          score: post.score,
          time_stamp: post.time_stamp
      })
  },

  async delPost(id) {
      return await db(`Post`).where({
          id: id
      }).del()
  },

  async addPost(postData) {
      return await db(`Post`).insert(postData)
  }
};
