function IcebreakerResponse(email){
  this.email = email
}
IcebreakerResponse.BatchCreate = function(data) {
  return data.map(function(iceBreakerResponseData) {
    return new IcebreakerResponse(iceBreakerResponseData)
  })
}
