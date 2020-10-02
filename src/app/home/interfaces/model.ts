export interface Model {
    inbox: {
        items: {
            name: string
        }[]
    },
    archive: {
        items: {
            name: string,
            history: {
                prevDest: string,
                metadata: any
            }
        }[]
    },
    'next-actions': {
        items: {
            name: string
        }[]
    },
    projects: {
        items: {
            name: string,
            purpPrinciples?: string,
            vision?: string,
            brainstorm?: string,
            organizing?: string,
            nextActions?: {
                stage: number,
                name: string
            }[]
        }[]
    }
}
