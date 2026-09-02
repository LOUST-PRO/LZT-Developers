import fs from 'fs';
import path from 'path';
import yaml from 'yaml';

export interface Member {
  username: string;
  name: string;
  role: string;
  bio?: string;
  skills: string[];
  github: string;
  twitter?: string;
  linkedin?: string;
  discord?: string;
  website?: string;
}

export const MAX_BIO_LENGTH = 320;

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
        const data = yaml.parse(fileContents) as Member;
        if (data && data.username) {
          if (data.bio && typeof data.bio === 'string') {
            const trimmed = data.bio.trim();
            data.bio = trimmed.length > MAX_BIO_LENGTH 
              ? trimmed.slice(0, MAX_BIO_LENGTH).trimEnd() + '...' 
              : trimmed;
          }
          members.push(data);
        }
      } catch (e) {
        console.error(`Error parsing ${file}:`, e);
      }
    }
  }
  
  return members;
}
