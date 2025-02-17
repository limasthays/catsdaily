function status(request, response) {
  response.status(200).json({
    message: "gatinhos são seres divinos.",
  });
}

export default status;
