#!/usr/bin/env node

/**
 * Bulk Theme Fixer Script
 * Automatically replaces light theme colors with dark theme equivalents
 * Run with: node scripts/fix-theme.js
 */

const fs = require('fs');
const path = require('path');

// Define all replacements
const REPLACEMENTS = [
  // Text colors - most common issues
  { from: /text-gray-900\b/g, to: 'text-white', desc: 'text-gray-900 → text-white' },
  { from: /text-gray-800\b/g, to: 'text-white', desc: 'text-gray-800 → text-white' },
  { from: /text-gray-700\b/g, to: 'text-purple-100', desc: 'text-gray-700 → text-purple-100' },
  { from: /text-gray-600\b/g, to: 'text-purple-100', desc: 'text-gray-600 → text-purple-100' },
  { from: /text-gray-500\b/g, to: 'text-purple-200', desc: 'text-gray-500 → text-purple-200' },
  
  { from: /text-blue-900\b/g, to: 'text-purple-300', desc: 'text-blue-900 → text-purple-300' },
  { from: /text-blue-800\b/g, to: 'text-purple-300', desc: 'text-blue-800 → text-purple-300' },
  { from: /text-blue-700\b/g, to: 'text-purple-300', desc: 'text-blue-700 → text-purple-300' },
  { from: /text-blue-600\b/g, to: 'text-purple-300', desc: 'text-blue-600 → text-purple-300' },
  { from: /text-blue-500\b/g, to: 'text-pink-300', desc: 'text-blue-500 → text-pink-300' },
  
  { from: /text-indigo-900\b/g, to: 'text-purple-300', desc: 'text-indigo-900 → text-purple-300' },
  { from: /text-indigo-800\b/g, to: 'text-purple-300', desc: 'text-indigo-800 → text-purple-300' },
  { from: /text-indigo-700\b/g, to: 'text-purple-300', desc: 'text-indigo-700 → text-purple-300' },
  { from: /text-indigo-600\b/g, to: 'text-purple-300', desc: 'text-indigo-600 → text-purple-300' },
  { from: /text-indigo-500\b/g, to: 'text-pink-300', desc: 'text-indigo-500 → text-pink-300' },
  
  // Background colors
  { from: /\bbg-white\b(?!\/)/g, to: 'bg-white/10 backdrop-blur-xl', desc: 'bg-white → bg-white/10 backdrop-blur-xl' },
  { from: /bg-gray-100\b/g, to: 'bg-white/10 backdrop-blur-xl', desc: 'bg-gray-100 → bg-white/10 backdrop-blur-xl' },
  { from: /bg-gray-200\b/g, to: 'bg-white/10 backdrop-blur-xl', desc: 'bg-gray-200 → bg-white/10 backdrop-blur-xl' },
  { from: /bg-gray-50\b/g, to: 'bg-white/10 backdrop-blur-xl', desc: 'bg-gray-50 → bg-white/10 backdrop-blur-xl' },
  
  { from: /bg-blue-100\b/g, to: 'bg-purple-500/30', desc: 'bg-blue-100 → bg-purple-500/30' },
  { from: /bg-blue-50\b/g, to: 'bg-purple-500/20', desc: 'bg-blue-50 → bg-purple-500/20' },
  { from: /bg-indigo-100\b/g, to: 'bg-indigo-500/30', desc: 'bg-indigo-100 → bg-indigo-500/30' },
  { from: /bg-indigo-50\b/g, to: 'bg-indigo-500/20', desc: 'bg-indigo-50 → bg-indigo-500/20' },
  
  // Border colors
  { from: /border-gray-200\b/g, to: 'border-white/20', desc: 'border-gray-200 → border-white/20' },
  { from: /border-gray-300\b/g, to: 'border-white/30', desc: 'border-gray-300 → border-white/30' },
  { from: /border-blue-200\b/g, to: 'border-purple-400', desc: 'border-blue-200 → border-purple-400' },
  { from: /border-indigo-200\b/g, to: 'border-purple-400', desc: 'border-indigo-200 → border-purple-400' },
];

const EXCLUDED_FILES = [
  'colors.ts', // Theme config file - already correct
  'config.ts', // Theme config file - already correct
  'check-theme.js',
  'fix-theme.js',
];

function shouldProcessFile(filePath) {
  const fileName = path.basename(filePath);
  return !EXCLUDED_FILES.includes(fileName);
}

function fixFile(filePath) {
  if (!shouldProcessFile(filePath)) {
    return { changed: false, fixes: 0 };
  }

  let content = fs.readFileSync(filePath, 'utf-8');
  const originalContent = content;
  let fixCount = 0;
  
  for (const replacement of REPLACEMENTS) {
    const matches = content.match(replacement.from);
    if (matches) {
      content = content.replace(replacement.from, replacement.to);
      fixCount += matches.length;
    }
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    return { changed: true, fixes: fixCount };
  }
  
  return { changed: false, fixes: 0 };
}

function processDirectory(dir, relativePath = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let totalFiles = 0;
  let totalFixes = 0;
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.join(relativePath, entry.name);
    
    if (entry.isDirectory()) {
      if (!entry.name.startsWith('.') && entry.name !== 'node_modules') {
        const result = processDirectory(fullPath, relPath);
        totalFiles += result.files;
        totalFixes += result.fixes;
      }
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      const result = fixFile(fullPath);
      if (result.changed) {
        console.log(`✅ Fixed ${relPath} (${result.fixes} replacements)`);
        totalFiles++;
        totalFixes += result.fixes;
      }
    }
  }
  
  return { files: totalFiles, fixes: totalFixes };
}

console.log('🔧 Starting automatic theme fix...\n');

const appDir = path.join(__dirname, '..', 'app');
const result = processDirectory(appDir, 'app');

console.log(`\n✨ Complete!`);
console.log(`   Fixed ${result.files} files`);
console.log(`   Made ${result.fixes} replacements`);
console.log(`\n💡 Next steps:`);
console.log('   1. Run "npm run dev" to test the changes');
console.log('   2. Check pages in browser for visual correctness');
console.log('   3. Run "node scripts/check-theme.js" to verify remaining issues\n');
