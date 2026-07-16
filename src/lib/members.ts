import fs from 'fs';
import path from 'path';
import yaml from 'yaml';

export interface Member {
  username: string;
  name: string;
  role: string;
  skills: string[];
  github: string;
  twitter?: string;
  website?: string;
}

export function getMembers(): Member[] {
  const membersDir = path.join(process.cwd(), 'members');
  if (!fs.existsSync(membersDir)) {
    return [];
  }
  
  const files = fs.readdirSync(membersDir);
  const members: Member[] = [];
  
  for (const file of files) {
    if (file.endsWith('.yml') || file.endsWith('.yaml')) {
      const filePath = path.join(membersDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      try {
        const data = yaml.parse(fileContents);
        members.push(data as Member);
      } catch (e) {
        console.error(`Error parsing ${file}:`, e);
      }
    }
  }
  
  return members;
}
