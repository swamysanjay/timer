process.argv.slice(2).forEach(e => {
  if (!isNaN(e) && e >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, e * 1000);
  }
});
