// Option A
function getFilesToBackup(lastBackup, changes) {
  return [
    ...new Set(
      changes
        .filter(([id, time]) => time > lastBackup)
        .map(([id, time]) => id)
        .sort((a, b) => a - b)
    )
  ];
}

// Option B
function getFilesToBackup(lastBackup, changes) {
  return changes.reduce((acc, [id, time]) => {
    if (time > lastBackup && !acc.includes(id)) {
      acc.push(id);
    }
    return acc;
  }, []).sort((a, b) => a - b);
}

const lastBackup = 1546300800
const changes = [
  [ 2, 1546300800 ],
  [ 3, 1546301100 ]
  [ 1, 1546300800 ],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ],
]

console.log(getFilesToBackup(lastBackup, changes)) // => [ 1, 3 ]