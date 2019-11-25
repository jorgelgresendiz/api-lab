var Movie = require("../../models/movie");

module.exports = {
  index,
  show,
  create,
  update,
  delete: deleteMovie
};

function index(req, res) {
  Movie.find({})
    .populate("cast")
    .then(function(movies) {
      res.status(200).json(movies);
    });
}

function show(req, res) {
  Movie.findById(req.params.id, function(err, movie) {
    //ok request
    res.status(200).json(movie);
  });
}

function create(req, res) {
  Movie.create(req.body, function(err, movie) {
    if (err) {
      return res.status(400).json(err); //bad request
    } else {
      return res.status(201).json(movie); //resource created
    }
  });
}

function update(req, res) {
  Movie.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(function(
    movie
  ) {
    res.status(200).json(movie);
  });
}

function deleteMovie(req, res) {
  Movie.findByIdAndDelete(req.params.id, function(err, deletedMovie) {
    res.status(200).json(deleteMovie);
  });
}
