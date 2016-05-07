require 'sinatra'
require 'sinatra/reloader' if development?
require 'json'

response_body = [
  { id: 1,
    author: "Peter Hunt",
    text: "This is one comment"
  },
  {
    id: 2,
    author: "Jordan Walke",
    text: "This is *another* comment"
  }
]

get '/api/comments' do
  headers 'Access-Control-Allow-Origin' => '*'
  body response_body.to_json
end

post '/api/comments' do
  response_body << {
    id: response_body.last[:id] + 1,
    author: params["author"],
    text: params["text"]
  }

  headers 'Access-Control-Allow-Origin' => '*'
  body response_body.to_json
end
