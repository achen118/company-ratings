class Company < ApplicationRecord
    validates :name, :rating, presence: true
end
