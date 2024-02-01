Clear-Host

Write-Host "FrontendTitan Website Build Tools" 
Write-Host "Close the terminal to exit." -ForegroundColor blue

Write-Host "Starting Up . " -NoNewline
Start-Sleep -Milliseconds 500 
Write-Host "`rStarting Up . ." -NoNewline
Start-Sleep -Milliseconds 500 
Write-Host "`rStarting Up . . ." -NoNewline
Start-Sleep -Milliseconds 500 

# Start Typescript Compiler
$tscProcess = Start-Process "npx" -ArgumentList "tsc --watch" -NoNewWindow

# Start SCSS Compiler
# Provide a Sass file to render

# Example: Compile foobar.scss to foobar.css
#   node-sass --output-style compressed foobar.scss > foobar.css
#   cat foobar.scss | node-sass --output-style compressed > foobar.css

# Example: Watch the sass directory for changes, compile with sourcemaps to the css directory    
#   node-sass --watch --recursive --output css
#     --source-map true --source-map-contents sass

$scssProcess = Start-Process "npx" -ArgumentList "node-sass src/styles --output dist --watch" -NoNewWindow