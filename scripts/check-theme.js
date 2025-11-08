#!/usr/bin/env node

/**
 * Theme Migration Helper Script
 * Finds all instances of light theme colors that need to be updated
 */

const fs = require('fs');
const path = require('path');

const LIGHT_COLORS = {
  // Text colors that are invisible on dark backgrounds
  'text-gray-900': 'text-white',
  'text-gray-800': 'text-white',
  'text-gray-700': 'text-purple-100',
  'text-gray-600': 'text-purple-100',
  'text-gray-500': 'text-purple-200',
  
  'text-blue-900': 'text-purple-300',
  'text-blue-800': 'text-purple-300',
  'text-blue-700': 'text-purple-300',
  'text-blue-600': 'text-purple-300',
  'text-blue-500': 'text-pink-300',
  
  'text-indigo-900': 'text-purple-300',
  'text-indigo-800': 'text-purple-300',
  'text-indigo-700': 'text-purple-300',
  'text-indigo-600': 'text-purple-300',
  'text-indigo-500': 'text-pink-300',
  
  // Background colors
  'bg-white': 'bg-white/10 backdrop-blur-xl',
  'bg-gray-100': 'bg-white/10 backdrop-blur-xl',
  'bg-gray-200': 'bg-white/10 backdrop-blur-xl',
  'bg-gray-50': 'bg-white/10 backdrop-blur-xl',
  
  'bg-blue-100': 'bg-purple-500/30',
  'bg-blue-50': 'bg-purple-500/20',
  'bg-indigo-100': 'bg-indigo-500/30',
  'bg-indigo-50': 'bg-indigo-500/20',
  
  // Border colors
  'border-gray-200': 'border-white/20',
  'border-gray-300': 'border-white/30',
  'border-blue-200': 'border-purple-400',
  'border-indigo-200': 'border-purple-400',
};

console.log('🔍 Searching for light theme colors in TSX files...\n');

const issues = [];

function searchDirectory(dir, relativePath = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.join(relativePath, entry.name);
    
    if (entry.isDirectory()) {
      if (!entry.name.startsWith('.') && entry.name !== 'node_modules') {
        searchDirectory(fullPath, relPath);
      }
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const lines = content.split('\n');
      
      lines.forEach((line, index) => {
        for (const [lightColor, darkColor] of Object.entries(LIGHT_COLORS)) {
          if (line.includes(lightColor)) {
            issues.push({
              file: relPath,
              line: index + 1,
              lightColor,
              darkColor,
              content: line.trim(),
            });
          }
        }
      });
    }
  }
}

const appDir = path.join(__dirname, '..', 'app');
searchDirectory(appDir, 'app');

if (issues.length === 0) {
  console.log('✅ No light theme colors found! Your codebase is consistent.\n');
} else {
  console.log(`⚠️  Found ${issues.length} instances of light theme colors:\n`);
  
  const groupedByFile = {};
  issues.forEach(issue => {
    if (!groupedByFile[issue.file]) {
      groupedByFile[issue.file] = [];
    }
    groupedByFile[issue.file].push(issue);
  });
  
  for (const [file, fileIssues] of Object.entries(groupedByFile)) {
    console.log(`📄 ${file} (${fileIssues.length} issues)`);
    fileIssues.slice(0, 5).forEach(issue => {
      console.log(`   Line ${issue.line}: ${issue.lightColor} → ${issue.darkColor}`);
      console.log(`   ${issue.content.substring(0, 80)}...`);
    });
    if (fileIssues.length > 5) {
      console.log(`   ... and ${fileIssues.length - 5} more`);
    }
    console.log('');
  }
  
  console.log('\n📋 Summary by color:');
  const colorCounts = {};
  issues.forEach(issue => {
    colorCounts[issue.lightColor] = (colorCounts[issue.lightColor] || 0) + 1;
  });
  
  Object.entries(colorCounts)
    .sort((a, b) => b[1] - a[1])
    .forEach(([color, count]) => {
      console.log(`   ${color}: ${count} occurrences → ${LIGHT_COLORS[color]}`);
    });
}

console.log('\n💡 To fix these issues:');
console.log('1. Replace light colors with dark theme equivalents');
console.log('2. Use theme tokens from app/theme/colors.ts');
console.log('3. Refer to DESIGN_SYSTEM.md for guidelines\n');
