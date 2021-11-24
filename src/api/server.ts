let token = `4f4bbecf3541e989d39454de736e2a54f41c4c6b5a6ee556`

export const server_calls = {
    get: async () => {
        const response = await fetch(`http://127.0.0.1:5000/`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`http://127.0.0.1:5000/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`http://127.0.0.1:5000/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Update new data on server')
        }

        return await response.json()
    },
    delete: async(id:string) => {
        const response = await fetch(`http://127.0.0.1:5000/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
        if(!response.ok){
            throw new Error('Failed to Delete drone on server')
        }

        return await response.json()
    }
}