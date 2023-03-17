const createRequest = (method) => (data) => {

    console.log('Inside createRequest');

    const options = {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    };

    // return fetch('/api', options)
    //     .then(res => res.json())
    //     .catch((error) => console.error(error));


    return fetch('/api', options)
        .then(res => {
            // Pass error messges from the server to the client browser console
            if (!res.ok) {
                return res.json().then(error => {
                    throw new Error(error.message);
                });
            }


            // Principle of least privilege: only return the data and status code to the React components
            // Including the status in an object to generate conditional confirmation messages in CarForm.js
            return res.json()
                .then(data => ({ data, status: res.status }));
        })
        .catch((error) => console.error(error));

}


export const findAllCars = createRequest("GET");
export const addCar = createRequest("POST");