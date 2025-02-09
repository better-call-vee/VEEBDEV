function main() {
    const t = Number(readline());
    for(let i = 0; i < t; i++) {
        const n = Number(readline());
        const freq = {};
        let ans = 0;
        for(let j = 0; j < n; j++) {
            const a = Number(readline());
            const b = a - (j + 1);
            ans += (freq[b] || 0);
            freq[b] = (freq[b] || 0) + 1;
        }
        console.log(ans);
    }
}

main();
