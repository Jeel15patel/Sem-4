const expr = require("express");
const router = expr.Router();

const movies = [
  {
    id: 101,
    name: "XTZ",
    year: 1999,
  },
  {
    id: 201,
    name: "ABC",
    year: 2003,
  },
  {
    id: 301,
    name: "DEF",
    year: 1998,
  },
];

module.exports = router;

router.get("/", (req, res) => {
  res.json(movies);
});

router.get("/:id([0-9]{3,})", (req, res) => {
  var curMovies = movies.filter((m) => {
    if (m.id == req.params.id) {
      return true;
    }
  });
  if (curMovies.length == 1) {
    res.json(curMovies[0]);
  } else {
    res.json("Message Not Foung");
  }
});
