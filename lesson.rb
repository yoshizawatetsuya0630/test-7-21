class Animal
    attr_accessor :name
  def initialize
    self.name = "レオ"
  end
end

animal = Animal.new


puts animal.name