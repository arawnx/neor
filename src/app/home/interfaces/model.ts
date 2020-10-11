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
    waiting: {
        items: {
            name: string
        }[]
    },
    'weekly-review': {
        clear: string,
        current: string,
        creative: string
    },
    'someday-maybe': {
        items: {
            name: string
        }[]
    },
    'calendar': {
        items: {
            name: string,
            date: {
                year: number,
                month: number,
                day: number
            }
        }[]
    },
    projects: {
        items: {
            name: string,
            purpPrinciples: string,
            vision: string,
            brainstorm: string,
            organizing: string,
            nextActions: {
                name: string
            }[]
        }[]
    }
}
