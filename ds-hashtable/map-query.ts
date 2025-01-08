import { Document, DocumentIndex } from './map-index';

/**
 * Queries a DocumentIndex and returns all the Documents that contain
 * any of the words in the query, as a Set.
 */
export function queryIndex(index: DocumentIndex, query: string): Set<Document> {
  const result = new Set<Document>();

  const words = query.match(/\b(\w+)\b/g) || [];

  for (const word of words) {
    const info = word.toLocaleLowerCase();
    const myDoc = index.get(info); // index[info] is not the right way to call !!!!
    if (myDoc) {
      for (const doc of myDoc) {
        result.add(doc);
      }
    }
  }

  return result;
}
