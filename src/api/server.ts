let token = 'put you token here'



export const serverCalls = {
    get: async () => {
        const response = await fetch('put url here', {
            method:'GET',
            headers: {
                'content-Type': 'application/json',
                'x-access-token': 'Bearer ${token}'
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data'), response.status
        }

        return await response.json()
    },
    create: async(data: any) => {
        const response = await fetch('put url here', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'Bearer ${token}'
            },

            body: JSON.stringify(data)
        });
        
        if (!response.ok){
            throw new Error('Failed to create data on server'), response.status
        }

        return await response.json()
    },
    update: async(id: string, data: any) => {
        const response = await fetch('put url here', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'Bearer ${token}'
            },

            body: JSON.stringify(data)
        });
        
        if (!response.ok){
            throw new Error('Failed to create data on server'), response.status
        }

        return await response.json()
    },
    delete: async(id: string) => {
            const response = await fetch('put url here', {
                method:'GET',
                headers: {
                    'content-Type': 'application/json',
                    'x-access-token': 'Bearer ${token}'
                }
            });
    
            if (!response.ok){
                throw new Error('Failed to delete data'), response.status
            }
    
    }
}