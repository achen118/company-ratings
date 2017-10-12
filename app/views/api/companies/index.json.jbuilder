@companies.each do |company|
  json.set! company.id do
    json.extract! company, :id, :name, :rating
  end
end