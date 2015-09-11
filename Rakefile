require 'html/proofer'

# ~/.ssh/config needs to be configured first for Host 'test. A symlink
# should also be set in the server linking ~/html/ and /var/www/ or
# whatever the folder to serve files from is.
# SSH_HOST = 'test'
# SSH_DIR  = 'html'

desc "Build the website from source"
task :build do
  puts "## Building website"
  status = system("middleman build --clean")
  puts status ? "OK" : "FAILED"
end

desc "Generates REAME.md file with emacs export markdown utility"
task :docs do
  puts "Calling Emacs batch export-to-markdown"
  `emacs --batch --file="README.org" -f org-md-export-to-markdown`
end

desc "Run the preview server at http://localhost:4567"
task :preview do
  system("middleman")
end

# task :test do
#   HTML::Proofer.new("./build").run
# end


desc "Build and deploy to GH pages"
task :travis_ci do
  try "git config --global user.name ${GH_USER}"
  try "git config --global user.email ${GH_EMAIL}"
  try "middleman deploy"
end



# desc "Deploy website via rsync"
# task :deploy_droplet do
#   puts "## Deploying website via rsync to #{SSH_HOST}"
#   status = system("rsync -avze 'ssh' --delete build/ #{SSH_HOST}:#{SSH_DIR}")
#   puts status ? "OK" : "FAILED"
# end
# desc "Build and deploy website to test server"
# task :gen_deploy => [:build, :docs, :deploy_droplet] do
# end

# helper for errors
def try(command)
  system command
  if $? != 0 then
    raise "Command: `#{command}` exited with code #{$?.exitstatus}"
  end
end
