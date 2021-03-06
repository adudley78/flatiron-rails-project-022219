Rails.application.routes.draw do

  get 'welcome/index'
  get '/login' => "sessions#new"
  post '/sessions' => "sessions#create"
  get '/logout' => "sessions#destroy"
  get '/auth/:github/callback', to: 'sessions#create'
  get '/home' => "welcome#home"

  resources :users, :only => [:new, :create]

  resources :projects do
    resources :issues
  end

  root 'projects#index'
end
