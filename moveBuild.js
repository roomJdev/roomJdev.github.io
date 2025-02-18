const fs = require('fs-extra');
const path = require('path');

(async () => {
    const buildDir = path.join(__dirname, 'build');
    const rootDir = __dirname;

    if (fs.existsSync(buildDir)) {
        // build 폴더 내부 파일을 루트 디렉토리로 이동
        await fs.copy(buildDir, rootDir);
        await fs.remove(buildDir); // build 폴더 삭제
        console.log('✅ Build files moved successfully.');
    } else {
        console.error('❌ Build folder not found.');
    }
})();
