import path from 'path';
export default function(name) {
  return /(\.(js)$)/i.test(path.extname(name));
}
