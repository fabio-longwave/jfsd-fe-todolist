export const config = {
    api: {
        BASE_URL: 'http://localhost:8000',
        ACTIVITY: '/activity',
        status: {
            COMPLETED: 'complete',
            ARCHIVED: 'archive',
            OPEN: 'uncomplete',
        }
    },

    activityStatus: {
        OPEN: {value: 'open', label: 'Aperte'},
        COMPLETED: {value: 'completed', label: 'Completate'},
        ARCHIVED: {value: 'archived', label: 'Archiviate'},
    }
}