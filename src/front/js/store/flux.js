const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            message: null,
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white",
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white",
                },
            ],
            auth: false,
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            login: async (email, password) => {
                try {
                    // fetching data from the backend
                    //process.env.BACKEND_URL +
                    const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
                        method: "POST",
                        body: JSON.stringify({
                            email: email,
                            password: password,
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });
                    const data = await resp.json();
                    // setStore({
                    //     message: data.message,
                    // });
                    // don't forget to return something, that is how the async resolves
                    localStorage.setItem("token", data.access_token);
                    localStorage.setItem("mail", email);
                    setStore({
                        auth: true,
                    });

                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },
            createRequest: async (city, sector, description) => {
                try {
                    const resp = await fetch(
                        process.env.BACKEND_URL + "/api/work_request", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json",
                            },
                            body: JSON.stringify({
                                city: city,
                                sector: sector,
                                description: description,
                                mail: localStorage.getItem("mail"),
                            }),
                        }
                    );
                    const data = await resp.json();
                    console.log(data);
                    // setStore({
                    //     message: data.message,
                    // });
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
                // var myHeaders = new Headers();
                // myHeaders.append("Content-Type", "application/json");

                // var raw = JSON.stringify({
                //     city: city,
                //     sector: sector,
                //     description: description,
                //     mail: localStorage.getItem("mail"),
                // });

                // var requestOptions = {
                //     method: "POST",
                //     headers: myHeaders,
                //     body: raw,
                //     redirect: "follow",
                // };

                // fetch(process.env.BACKEND_URL + "/api/work_request", requestOptions)
                //     .then((response) => response.text())
                //     .then((result) => console.log(result))
                //     .catch((error) => console.log("error", error));
            },

            createUser: async (name, lastname, email, password) => {
                try {
                    // fetching data from the backend
                    const resp = await fetch(
                        process.env.BACKEND_URL + "/api/worker_signup", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json",
                            },
                            body: JSON.stringify({
                                name: name,
                                lastname: lastname,
                                email: email,
                                password: password,
                            }),
                        }
                    );
                    const data = await resp.text();
                    console.log(data);
                    // setStore({
                    //     message: data.message,
                    // });
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
                // var myHeaders = new Headers();
                // myHeaders.append("Content-Type", "application/json");

                // var raw = JSON.stringify({
                //     name: name,
                //     lastname: lastname,
                //     email: email,
                //     password: password,
                // });

                // var requestOptions = {
                //     method: "POST",
                //     headers: myHeaders,
                //     body: raw,
                // };

                // fetch(
                //         "https://3001-atxoupi-proyectofinalfi-agxb1yax6uc.ws-eu54.gitpod.io/api/user_signup",
                //         requestOptions
                //     )
                //     .then((response) => response.text())
                //     .then((result) => console.log(result))
                //     .catch((error) => console.log("error", error));
            },
            createWorker: async (name, city, email, password, sector) => {
                try {
                    // fetching data from the backend
                    const resp = await fetch(
                        process.env.BACKEND_URL + "/api/worker_signup", {
                            method: "POST",
                            body: JSON.stringify({
                                name: name,
                                city: city,
                                email: email,
                                password: password,
                                sector: sector,
                            }),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    );
                    const data = await resp.text();
                    console.log(data);
                    // setStore({
                    //     message: data.message,
                    // });
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
                //     var myHeaders = new Headers();
                //     myHeaders.append("Content-Type", "application/json");

                //     var raw = JSON.stringify({
                //         name: name,
                //         email: email,
                //         password: password,
                //         city: city,
                //         sector: sector,
                //     });

                //     var requestOptions = {
                //         method: "POST",
                //         headers: myHeaders,
                //         body: raw,
                //     };

                //     fetch(
                //             "https://3001-atxoupi-proyectofinalfi-agxb1yax6uc.ws-eu54.gitpod.io/api/worker_signup",
                //             requestOptions
                //         )
                //         .then((response) => response.text())
                //         .then((result) => console.log(result))
                //         .catch((error) => console.log("error", error));
            },
            getMessage: async () => {
                try {
                    // fetching data from the backend
                    const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
                    const data = await resp.json();
                    setStore({
                        message: data.message,
                    });
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo,
                });
            },
        },
    };
};

export default getState;