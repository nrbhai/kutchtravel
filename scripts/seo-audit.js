#!/usr/bin/env node

/**
 * SEO Audit Script for Kutch Travel Website
 * Run with: node scripts/seo-audit.js
 */

const fs = require('fs');
const path = require('path');

class SEOAuditor {
  constructor() {
    this.issues = [];
    this.warnings = [];
    this.successes = [];
  }

  // Check if file exists
  checkFileExists(filePath, description) {
    const fullPath = path.join(process.cwd(), filePath);
    if (fs.existsSync(fullPath)) {
      this.successes.push(`✅ ${description}: ${filePath}`);
      return true;
    } else {
      this.issues.push(`❌ Missing ${description}: ${filePath}`);
      return false;
    }
  }

  // Check sitemap.xml
  checkSitemap() {
    console.log('\n🔍 Checking Sitemap...');
    this.checkFileExists('app/sitemap.ts', 'Dynamic Sitemap');
  }

  // Check robots.txt
  checkRobots() {
    console.log('\n🔍 Checking Robots.txt...');
    this.checkFileExists('app/robots.ts', 'Dynamic Robots.txt');
  }

  // Check manifest.json for PWA
  checkManifest() {
    console.log('\n🔍 Checking Web Manifest...');
    this.checkFileExists('public/manifest.json', 'Web App Manifest');
  }

  // Check for essential meta tags in layout
  checkMetaTags() {
    console.log('\n🔍 Checking Meta Tags...');
    const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
    
    if (fs.existsSync(layoutPath)) {
      const content = fs.readFileSync(layoutPath, 'utf8');
      
      // Check for essential meta elements
      const checks = [
        { pattern: /export const metadata/, name: 'Metadata export' },
        { pattern: /title:/, name: 'Title configuration' },
        { pattern: /description:/, name: 'Description meta' },
        { pattern: /openGraph:/, name: 'Open Graph tags' },
        { pattern: /twitter:/, name: 'Twitter Card tags' },
        { pattern: /keywords:/, name: 'Keywords meta' },
        { pattern: /robots:/, name: 'Robots meta' },
      ];

      checks.forEach(check => {
        if (check.pattern.test(content)) {
          this.successes.push(`✅ ${check.name} found`);
        } else {
          this.warnings.push(`⚠️  ${check.name} not found in layout`);
        }
      });
    } else {
      this.issues.push('❌ Layout file not found');
    }
  }

  // Check for structured data
  checkStructuredData() {
    console.log('\n🔍 Checking Structured Data...');
    const seoUtilPath = path.join(process.cwd(), 'app/utils/seo.ts');
    const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
    
    let foundStructuredData = false;
    
    if (fs.existsSync(seoUtilPath)) {
      const content = fs.readFileSync(seoUtilPath, 'utf8');
      
      if (content.includes('generateDestinationStructuredData') || content.includes('TouristDestination')) {
        this.successes.push('✅ Destination structured data schema found');
        foundStructuredData = true;
      }
      
      if (content.includes('generateBreadcrumbStructuredData') || content.includes('BreadcrumbList')) {
        this.successes.push('✅ Breadcrumb structured data schema found');
        foundStructuredData = true;
      }
    }
    
    if (fs.existsSync(layoutPath)) {
      const content = fs.readFileSync(layoutPath, 'utf8');
      
      if (content.includes('application/ld+json')) {
        this.successes.push('✅ JSON-LD implementation found in layout');
        foundStructuredData = true;
      }
    }
    
    if (!foundStructuredData) {
      this.warnings.push('⚠️  Structured data not found');
    }
  }

  // Check image optimization
  checkImages() {
    console.log('\n🔍 Checking Image Optimization...');
    const nextConfigPath = path.join(process.cwd(), 'next.config.ts');
    
    if (fs.existsSync(nextConfigPath)) {
      const content = fs.readFileSync(nextConfigPath, 'utf8');
      
      const imageChecks = [
        { pattern: /formats:.*webp/, name: 'WebP format support' },
        { pattern: /formats:.*avif/, name: 'AVIF format support' },
        { pattern: /deviceSizes:/, name: 'Responsive device sizes' },
        { pattern: /imageSizes:/, name: 'Image size configurations' },
      ];

      imageChecks.forEach(check => {
        if (check.pattern.test(content)) {
          this.successes.push(`✅ ${check.name} configured`);
        } else {
          this.warnings.push(`⚠️  ${check.name} not configured`);
        }
      });
    } else {
      this.issues.push('❌ Next.js config file not found');
    }
  }

  // Check for analytics
  checkAnalytics() {
    console.log('\n🔍 Checking Analytics...');
    const analyticsPath = path.join(process.cwd(), 'app/components/Analytics.tsx');
    
    if (fs.existsSync(analyticsPath)) {
      const content = fs.readFileSync(analyticsPath, 'utf8');
      
      if (content.includes('gtag')) {
        this.successes.push('✅ Google Analytics implementation found');
      }
      
      if (content.includes('trackEvent')) {
        this.successes.push('✅ Custom event tracking implemented');
      }
    } else {
      this.warnings.push('⚠️  Analytics component not found');
    }
  }

  // Check performance optimizations
  checkPerformance() {
    console.log('\n🔍 Checking Performance Optimizations...');
    
    // Check for web vitals
    const webVitalsPath = path.join(process.cwd(), 'app/components/WebVitals.tsx');
    if (fs.existsSync(webVitalsPath)) {
      this.successes.push('✅ Web Vitals monitoring implemented');
    } else {
      this.warnings.push('⚠️  Web Vitals monitoring not found');
    }

    // Check for error boundary
    const errorBoundaryPath = path.join(process.cwd(), 'app/components/ErrorBoundary.tsx');
    if (fs.existsSync(errorBoundaryPath)) {
      this.successes.push('✅ Error Boundary implemented');
    } else {
      this.warnings.push('⚠️  Error Boundary not found');
    }

    // Check for loading states
    const loadingPath = path.join(process.cwd(), 'app/loading.tsx');
    if (fs.existsSync(loadingPath)) {
      this.successes.push('✅ Loading states implemented');
    } else {
      this.warnings.push('⚠️  Loading states not found');
    }
  }

  // Run all audits
  async audit() {
    console.log('🚀 Starting SEO Audit for Kutch Travel Website\n');
    
    this.checkSitemap();
    this.checkRobots();
    this.checkManifest();
    this.checkMetaTags();
    this.checkStructuredData();
    this.checkImages();
    this.checkAnalytics();
    this.checkPerformance();
    
    this.generateReport();
  }

  // Generate final report
  generateReport() {
    console.log('\n📊 SEO AUDIT REPORT');
    console.log('===================\n');
    
    if (this.successes.length > 0) {
      console.log('✅ SUCCESSES:');
      this.successes.forEach(success => console.log(`   ${success}`));
      console.log('');
    }
    
    if (this.warnings.length > 0) {
      console.log('⚠️  WARNINGS:');
      this.warnings.forEach(warning => console.log(`   ${warning}`));
      console.log('');
    }
    
    if (this.issues.length > 0) {
      console.log('❌ CRITICAL ISSUES:');
      this.issues.forEach(issue => console.log(`   ${issue}`));
      console.log('');
    }
    
    const totalChecks = this.successes.length + this.warnings.length + this.issues.length;
    const score = Math.round((this.successes.length / totalChecks) * 100);
    
    console.log(`📈 SEO SCORE: ${score}%`);
    console.log(`   ✅ Passed: ${this.successes.length}`);
    console.log(`   ⚠️  Warnings: ${this.warnings.length}`);
    console.log(`   ❌ Issues: ${this.issues.length}`);
    
    if (score >= 90) {
      console.log('\n🎉 Excellent SEO implementation!');
    } else if (score >= 70) {
      console.log('\n👍 Good SEO implementation with room for improvement');
    } else {
      console.log('\n⚠️  SEO implementation needs attention');
    }
  }
}

// Run the audit
const auditor = new SEOAuditor();
auditor.audit();