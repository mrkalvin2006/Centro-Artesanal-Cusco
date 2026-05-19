const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            // Backgrounds
            content = content.replace(/bg-brand-cream/g, 'bg-mystic-dark');
            content = content.replace(/bg-brand-paper/g, 'bg-mystic-darker');
            content = content.replace(/bg-brand-brown-dark/g, 'bg-mystic-black');
            content = content.replace(/bg-brand-brown/g, 'bg-mystic-gray');
            
            // Text colors
            content = content.replace(/text-brand-brown-dark/g, 'text-mystic-light');
            content = content.replace(/text-brand-brown(?![-\w])/g, 'text-mystic-muted');
            
            // Gold -> Green
            content = content.replace(/text-brand-gold/g, 'text-mystic-green');
            content = content.replace(/bg-brand-gold/g, 'bg-mystic-green');
            content = content.replace(/border-brand-gold/g, 'border-mystic-green');
            content = content.replace(/shadow-brand-gold/g, 'shadow-mystic-green');
            
            content = content.replace(/text-brand-gold-light/g, 'text-mystic-green-light');
            content = content.replace(/bg-brand-gold-light/g, 'bg-mystic-green-light');

            fs.writeFileSync(fullPath, content);
        }
    }
}

processDir(srcDir);
console.log('Done refactoring colors.');
