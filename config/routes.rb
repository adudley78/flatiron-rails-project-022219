Rails.application.routes.draw do

  resources :projects do
    resources :issues
  end

  root 'projects#index'
end
