export type ComicDetails = {
    uid: string;
    views: number;
    author: {
      name: string;
      bio: string;
    };
    about: string;
    chapters: Array<Chapter>;
};

export type Chapter = {
    title: string;
    issue: string;
    publicationDate: string;
};