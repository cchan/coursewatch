#!/usr/bin/env ruby

# Example:
# bundler install
# ruby courseFreeSpots.rb 1179 CS 241E

require 'nokogiri'
require 'open-uri'

def printFreeSpots(sess, subject, cournum)
  url = "http://www.adm.uwaterloo.ca/cgi-bin/cgiwrap/infocour/salook.pl?sess=#{sess}&subject=#{subject}&cournum=#{cournum}"
  doc = Nokogiri::HTML(open(url))
  numSpots = doc.css('tr:nth-child(2) td:nth-child(7)').text.to_i
  numTaken = doc.css('tr:nth-child(2) td:nth-child(8)').text.to_i
  puts "#{numSpots-numTaken} spots remaining in #{subject}#{cournum}"
end

printFreeSpots *ARGV
