const { execSync } = require('child_process');

try {
  console.log('Node version:', process.version);
  console.log('Environment:', process.env.NODE_ENV);
  console.log('Current directory:', process.cwd());
  console.log('Directory content:', execSync('ls -la').toString());
  console.log('Package.json content:', require('./package.json'));
  console.log('Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  console.log('Running build...');
  execSync('npx vite build', { stdio: 'inherit' });
} catch (error) {
  console.error('Build error:', error);
  process.exit(1);
}