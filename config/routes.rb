Rails.application.routes.draw do
  devise_for :users, path: 'auth', path_names: { sign_in: 'login' }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "pages#content"
end
