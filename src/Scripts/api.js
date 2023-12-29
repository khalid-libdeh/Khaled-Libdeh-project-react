export const BACKEND_API = "https://tap-web-1.herokuapp.com/topics/list"

export async function fetchTopics(topicName) {

    const url = new URL(BACKEND_API);
    if (topicName) {
        url.searchParams.append('phrase', topicName);
    }
    
    return fetch(url)
        .then(response => {
            return response.json()
        })

}