class CreateCurates < ActiveRecord::Migration[5.2]
  def change
    create_table :curates do |t|

      t.timestamps
    end
  end
end
