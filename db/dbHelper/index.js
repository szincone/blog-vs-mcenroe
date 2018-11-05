"use strict";

const db = require("../dbConfig.js");

module.exports = {
  async getPosts() {
    return await db(`Post`).select();
  },

  async getPost(id) {
    return await db(`Post`)
      .where({
        id,
      })
      .select();
  },

  async putPost(post) {
    return await db(`Post`)
      .where({
        id: post.id,
      })
      .update({
        content: post.content,
        title: post.title,
      });
  },

  async delPost(id) {
    return await db(`Post`)
      .where({
        id,
      })
      .del();
  },

  async addPost(postData) {
    return await db(`Post`).insert(postData);
  },
};
