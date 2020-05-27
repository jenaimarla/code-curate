class CuratesController < ApplicationController

  def index
    @curates = Curate.all
  end

end
