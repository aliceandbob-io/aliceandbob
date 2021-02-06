Rails.application.routes.draw do
  match '(*any)', to: redirect(subdomain: ''), via: :all, constraints: {subdomain: 'www'}
  devise_for :users, path: 'auth', path_names: { sign_in: 'login' }
  get '/online-pgp-tool', to: 'online_pgp_tool#online_pgp_tool', as: "online_pgp_tool"
  root "pages#landing"
end
