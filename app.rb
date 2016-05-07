require 'sinatra'
require 'sinatra/reloader' if development?
require 'json'

get '/api/comments' do
  headers 'Access-Control-Allow-Origin' => '*'
  body [
    { id: 1,
      author: "Peter Hunt",
      text: "This is one comment"
    },
    {
      id: 2,
      author: "Jordan Walke",
      text: "This is *another* comment"
    }
  ].to_json
end
