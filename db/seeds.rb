# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Company.destroy_all

Company.create!(name: "Google", rating: 4.4)
Company.create!(name: "Twitter", rating: 3.9)
Company.create!(name: "Taco Bell", rating: 3.2)
Company.create!(name: "Twilio", rating: 4.2)