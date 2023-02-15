const axios = require("axios");
const model = require("../../model/devs");
module.exports = {
  async store(req, res) {
    const { username } = req.body;

    const userExists = await model.findOne({ user: username });
    if (userExists) {
      return res.json(userExists);
    }

    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    const { name, bio, avatar_url: avatar } = response.data;
    try {
      const dev = await model.create({
        name,
        user: username,
        bio,
        avatar,
      });

      return res.json(dev);
    } catch (error) {
      return res.json(error);
    }
  },
};
