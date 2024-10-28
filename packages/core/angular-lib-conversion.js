const fs = require('fs');
const path = require('path');

// File paths - Update these paths based on your project structure
const customEventFile = path.resolve(__dirname, '../angular/src/lib/stencil-generated/components.ts');
const fromEventFile = path.resolve(__dirname, '../angular/src/lib/stencil-generated/angular-component-lib/utils.ts');

// Function to read, replace, and write back to a file
function replaceInFile(filePath, replacer) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading ${filePath}: ${err.message}`);
            process.exit(1);
        }

        const updatedData = replacer(data);

        fs.writeFile(filePath, updatedData, 'utf8', (err) => {
            if (err) {
                console.error(`Error writing ${filePath}: ${err.message}`);
                process.exit(1);
            }
            console.log(`Successfully updated ${filePath}`);
        });
    });
}

// 1. Replace logic for the CustomEvent file
replaceInFile(customEventFile, (data) =>
    data.replace(/CustomEvent<([^>]+)>/g, '$1')
);

// 2. Replace logic for the fromEvent file
replaceInFile(fromEventFile, (data) =>
    data
        // Replace fromEvent(el, eventName) with fromEvent(el, eventName).pipe(map((e: any) => e.detail))
        .replace(
            /fromEvent\(([^,]+),\s*([^)]+)\)/g,
            'fromEvent($1, $2).pipe(map((e: any) => e.detail))'
        )
        // Replace import { fromEvent } from 'rxjs'; with import { fromEvent, map } from 'rxjs';
        .replace(
            /import\s*{\s*fromEvent\s*}\s*from\s*'rxjs';/g,
            `import { fromEvent, map } from 'rxjs';`
        )
);
