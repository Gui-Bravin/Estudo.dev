function status(request, response) {
  response.status(200).json({ chaves: "são acima da média" });
}

export default status;
