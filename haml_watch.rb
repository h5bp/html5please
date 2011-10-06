# Script to watch a directory for any changes to a haml file
# and compile it.
#
# USAGE: ruby haml_watch.rb <directory_to_watch>
#
require 'rubygems'
require 'fssm'

opts = ' --format html5 --double-quote-attributes '

directory = File.join(File.dirname(__FILE__), ARGV.first)
FSSM.monitor(directory, '**/*.haml') do
  update do |base, relative|
    input = "#{base}/#{relative}"
    output = "#{base}/#{relative.gsub!('.haml', '.html')}"
    command = "haml " + opts + "#{input} #{output}"
    %x{#{command}}
    puts "Regenerated #{input} to #{output}"
  end
end

