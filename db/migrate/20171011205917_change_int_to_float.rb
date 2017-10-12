class ChangeIntToFloat < ActiveRecord::Migration[5.1]
  def change
    change_column :companies, :rating, :float
  end
end
