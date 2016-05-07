require 'sinatra'
require 'json'

get '/api/comments' do
  [
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
