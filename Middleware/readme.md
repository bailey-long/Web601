# req and res
# req  
  req stands for requestand contains information about the incoming HTTP requests from the user  
  There are a number of methods that you can use with req  
  - method
  - url
  - headers
  - query
  - params
  - body
# res  
  res stands for response and is the response to the incoming HTTP requests  
  There are also a number of methods contained within res  
  - send(data)
  - status(code)
  - status(200) Sets response status to be "OK"
  - status(404) Sets the response to "Not Found"
  - json(data) Sends a JSON response to the client with the provided JSON data. This method is equivalent to calling res.send() with a JSON object.  
  - redirect(url)
  - setHeader(name, value)
  - setHeader('Content-Type', 'application/json')  
  - cookie(name, value, options)
  - clearCookie(name)
  - render(view locals)