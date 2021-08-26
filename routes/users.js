const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//register

router.post('/register', async (req, res) => {
  try {
    //salt
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    //create user

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    //save user

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//login

router.post('/login', async (req, res) => {
  //find

  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    res.status(400).json({ msg: 'no user found' });
  } else {
    //validate user
    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid) {
      res.status(400).json({ msg: 'no user found' });
    }

    //send
    res.status(200).json({ username: user.username });
  }
});

module.exports = router;
