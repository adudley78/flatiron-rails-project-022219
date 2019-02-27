Rails.application.routes.draw do

  # get 'issues/create'

  resources :users, :only => [:new, :create]

  resources :projects do
    resources :issues
  end

  root 'projects#index'
end
