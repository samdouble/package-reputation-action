import * as core from '@actions/core';
import { spawn } from 'node:child_process';
import { DependencyResults } from './types';

export async function getDependencies(
  includeDevDependencies: boolean,
  includePeerDependencies: boolean,
): Promise<DependencyResults> {
  return new Promise((resolve, reject) => {
    const output: string[] = [];
    const proc = spawn(
      'npx',
      [
        'howfat',
        '-r', 'json',
        '.',
        '--space', '2',
        ...(includeDevDependencies ? ['--dev-dependencies'] : []),
        ...(includePeerDependencies ? ['--peer-dependencies'] : []),
      ],
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
}
