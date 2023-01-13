// | /api/auth/signUp | post | email, password, sex, profession, quality[], name | register | Tokens |
// | /api/auth/signInWithPassword | post | email, password | login | Tokens |
// | /api/auth/token | post | refresh_token | refresh token | Tokens |

const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { validationResult } = require("express-validator");
const { generateUserData } = require("../utils/helpers");
const tokenService = require("../services/token.service");
const { check } = require("express-validator");
const Token = require("../models/Token");
const router = express.Router({ mergeParams: true });

// api/auth/singUp
router.post("/signUp", [
  check("email", "Uncorrect email").isEmail(),
  check("password", "Min leanght is 8").isLength({ min: 8 }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: {
            message: "INVALID_DATA",
            code: 400,
            errors: errors.array(),
          },
        });
      }

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
  },
]);

router.post("/signInWithPassword", [
  // 1. validate
  check("email", "Email is not correct").normalizeEmail().isEmail(),
  check("password", "The password cannot be empty").exists(),

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: "INVALID_DATA",
          code: 400,
        });
      }

      const { email, password } = req.body;

      // 2. find user
      const existingUser = await User.findOne({ email });
      if (!existingUser) {
        return res.status(400).send({
          error: { message: "EMAIL_NOT_FOUND", code: 400 },
        });
      }

      // 3. compare hashed password
      const isPasswordEqual = await bcrypt.compare(
        password,
        existingUser.password
      );

      if (!isPasswordEqual) {
        return res.status(400).send({
          error: { message: "INVALID_PASSWORD", code: 400 },
        });
      }

      // 4. generate token
      const tokens = tokenService.generate({ _id: existingUser._id });
      await tokenService.save(existingUser._id, tokens.refreshToken);

      // 5. return data
      res.status(200).send({ ...tokens, userId: existingUser._id });
    } catch (e) {
      res
        .status(500)
        .json({ message: "На сервере произошла ошибка. Попробуйте позже" });
    }
  },
]);

function isTokenInvalid(data, dbToken) {
  !data || !dbToken || data._id !== dbToken?.user?.toString();
}
router.post("/token", async (req, res) => {
  try {
    const { refresh_token: refreshToken } = req.body;
    const data = tokenService.validateRefresh(refreshToken);
    const dbToken = tokenService.findToken(refreshToken);

    if (isTokenInvalid(data, dbToken)) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const tokens = tokenService.generate({ id: data._id });
    await tokenService.save(data._id, tokens.refreshToken);
    res.status(200).send({ ...tokens, userId: data._id });
  } catch (e) {
    res
      .status(500)
      .json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
});

module.exports = router;
