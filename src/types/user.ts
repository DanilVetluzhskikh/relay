export type Language = {
    node: {
        name: string;
        id: string;
    }
}

export type Repository = {
    name: string;
    description: string | null;
    id: string;
    isPrivate: boolean;
    languages: {
        edges: Language[]
    }
}

export type UserData = {
    user: {
        repositories: {
            edges: {
                node: Repository
            }[];
            totalCount: number;
        }
    }
}
