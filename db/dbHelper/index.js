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

  async putPost(id, post) {
    return await db(`Post`)
      .where({
        id: post.id,
      })
      .update({
        content: post.content,
        title: post.title,
        score: post.score,
        time_stamp: post.time_stamp,
      });
  },

  // async updateNote(id, note) {
  //   return await db(`Notes`)
  //     .where({
  //       id: id,
  //     })
  //     .update({
  //       title: note.title,
  //       content: note.content,
  //     });
  // },

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
