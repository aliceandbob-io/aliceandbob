# config/initializers/default_meta.rb

# Initialize default meta tags.
DEFAULT_META = YAML.load_file(Rails.root.join("config/meta.yml"))
