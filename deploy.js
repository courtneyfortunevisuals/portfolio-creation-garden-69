
// Simple deploy script for GitHub Pages
const ghpages = require('gh-pages');
const path = require('path');

// The folder that contains build artifacts
const buildDir = path.resolve(__dirname, 'dist');

console.log('Deploying to GitHub Pages...');

ghpages.publish(buildDir, {
  branch: 'gh-pages',
  message: 'Auto-deploy from script',
}, (err) => {
  if (err) {
    console.error('Deployment failed:', err);
    process.exit(1);
  }
  console.log('Deployment complete!');
});
