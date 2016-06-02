# class BCCheck < ::HTML::Proofer::Checkable
#   def mailto?
#     return false if @data_ignore_proofer || @href.nil? || @href.empty?
#     return @href.match /^mailto\:/
#   end

#   def club_name?
#     return @href.match /\:octocat@github.com\Z/
#   end

# end

# class TableWithBC < ::HTML::Proofer::CheckRunner
#   def run
#     @html.css('table').each do |node|
#       link = BCCheck.new(node, self)
#       line = node.line

#       if link.mailto? && link.club_name?
#         return add_issue("Table contains no BBRFC Celtic Club", line)
#       end
#     end
#   end
# end
