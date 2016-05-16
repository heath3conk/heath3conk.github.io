get '/blogs/index' do
  @blogs = Blog.all
  erb :'blogs/index'  
end

get '/blogs/:id' do 
  erb :'blogs/show'
end