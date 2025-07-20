import * as core from '@actions/core';
import { spawn } from 'node:child_process';

async function getDependencies() {
  const createPromise = new Promise((resolve, reject) => {
    const output: string[] = [];
    const proc = spawn(
      'npx',
      ['howfat', '-r', 'json', '.', '--space', '2'],
      {
        cwd: process.cwd(),
        env: process.env,
        stdio: ['inherit', 'pipe', 'pipe'],
      }
    );
    proc.stdout.on('data', (data: string) => {
      core.info(data);
      output.push(data);
    });
    proc.stderr.on('data', (data: string) => {
      core.error(data);
    });
    proc.on('close', (code: number) => {
      if (code !== 0) {
        const msg = `Failed with code = ${code}`;
        return reject(new Error(msg));
      }
      resolve(JSON.parse(output.join('')));
    });
  });
  return createPromise;
}

export async function main() {
  core.info(`Running package reputation action`);

  const output = await getDependencies();
  console.log(output);
}
