function nextScreen() {
  const actualFile = document.title.toLowerCase().split(" ");
  const nextFile = actualFile[0] + (+actualFile.pop() + 1);
  window.location.href = './' + nextFile + '.html'
}

function previousScreen() {
  const actualFile = document.title.toLowerCase().split(" ");
  const previousFile = actualFile[0] + (+actualFile.pop() - 1);
  window.location.href = './' + previousFile + '.html'
}
