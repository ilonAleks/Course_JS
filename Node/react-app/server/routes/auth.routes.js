// | /api/auth/signUp | post | email, password, sex, profession, quality[], name | register | Tokens |
// | /api/auth/signInWithPassword | post | email, password | login | Tokens |
// | /api/auth/token | post | refresh_token | refresh token | Tokens |

const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { generateUserData } = require("../utils/helpers");
const tokenService = require("../services/token.service");
const router = express.Router({ mergeParams: true });

// api/auth/singUp
router.post("/signUp", async (req, res) => {
  try {
    // 1. get data from req (email, password, ...)
    const { email, password } = req.body;

    // 2. check if users already exists
    const exitingUser = await User.findOne({ email });
    if (exitingUser) {
      return res.status(400).json({
        error: {
          message: "EMAIL_EXISTS",
          code: 400,
        },
      });
    }

    // 3. hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // 4. create user
    const newUser = await User.create({
      ...generateUserData(),
      ...req.body,
      password: hashedPassword,
    });

    // 5. generate tokens
    const tokens = tokenService.generate({ _id: newUser._id });
    await tokenService.save(newUser._id, tokens.refreshToken);

    res.status(201).send({ ...tokens, userId: newUser._id });
  } catch (e) {
    res
      .status(500)
      .json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
});

router.post("/signInWithPassword", async (req, res) => {});

router.post("/token", async (req, res) => {});

module.exports = router;
