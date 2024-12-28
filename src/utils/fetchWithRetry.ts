
export const fetchWithRetry = async (url: string, options = {}, retries = 3, delay = 1000) => {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                console.warn(`HTTP Error: ${response.status} on attempt ${i + 1}`);
                throw new Error(`HTTP Error: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Attempt ${i + 1} failed: ${error}`);
            if (i === retries - 1) throw error;
            await new Promise(resolve => setTimeout(resolve, delay));
            delay *= 2; // Exponential backoff
        }
    }
};
