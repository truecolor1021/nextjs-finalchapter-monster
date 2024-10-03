import { ComicDetails } from './types';

// Mock API call to fetch comic details by UUID
export const fetchComicDetails = async (uid: string): Promise<ComicDetails> => {
    // Simulate fetching data from an API
    return {
      uid,
      views: 1234,
      author: {
        name: 'John Doe',
        bio: 'An acclaimed comic book writer.',
      },
      about: 'A gripping tale of adventure and intrigue.',
      chapters: [
        { title: 'Chapter 1', issue: '#1', publicationDate: '2022-01-01' },
        { title: 'Chapter 2', issue: '#2', publicationDate: '2022-02-01' },
        { title: 'Chapter 3', issue: '#3', publicationDate: '2022-03-01' },
        // Add more chapters as needed
      ],
    };
  };