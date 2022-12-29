const express = require("express");
const router = express.Router({ mergeParams: true });

router.post("/signUp", async (req, res) => {});

router.post("/signInWithPassword", async (req, res) => {});

router.post("/token", async (req, res) => {});

module.exports = router;

// | /api/auth/signUp | post | email, password, sex, profession, quality[], name | register | Tokens |
// | /api/auth/signInWithPassword | post | email, password | login | Tokens |
// | /api/auth/token | post | refresh_token | refresh token | Tokens |
