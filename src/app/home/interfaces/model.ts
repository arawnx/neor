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
    }
}
