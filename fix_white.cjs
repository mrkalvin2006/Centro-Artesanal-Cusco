const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src/components');

const files = fs.readdirSync(srcDir);
for (const file of files) {
    if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const fullPath = path.join(srcDir, file);
        let content = fs.readFileSync(fullPath, 'utf8');
        content = content.replace(/bg-white/g, 'bg-mystic-gray');
        fs.writeFileSync(fullPath, content);
    }
}
console.log("Replaced bg-white in components.");
