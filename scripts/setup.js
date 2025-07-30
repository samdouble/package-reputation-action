import subProcess from 'child_process';

subProcess.exec('npm install -g howfat@0.3.8', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    console.log(`The stdout Buffer from shell: ${stdout.toString()}`);
    console.log(`The stderr Buffer from shell: ${stderr.toString()}`);
  }
});
