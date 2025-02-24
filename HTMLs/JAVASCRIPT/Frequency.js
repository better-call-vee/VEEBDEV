let x = ["mango", "banana", "jaker party", "no"]

function electionResult(votes) {
    if (!(Array.isArray(votes))) return "Invalid";

    let cnt = { mango: 0, banana: 0 };

    for (let can of votes) {
        cnt[can] = (cnt[can] || 0) + 1;
    }

    let m = "mango", b = "banana";
    if (cnt[m] === cnt[b])
        return "Draw";
    else if (cnt[m] > cnt[b]) return "Mango";
    else return "Banana";
}

console.log(electionResult(x));