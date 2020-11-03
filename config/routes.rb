Rails.application.routes.draw do
  match '(*any)', to: redirect(subdomain: ''), via: :all, constraints: {subdomain: 'www'}
  devise_for :users, path: 'auth', path_names: { sign_in: 'login' }
  root "pages#content"
end
