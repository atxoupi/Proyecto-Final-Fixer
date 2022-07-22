const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            auth: false,
            register: false,
            work: [],
            usuario: null,
        },
        actions: {
            // LOGIN
            login: async (email, password) => {
                try {
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
                    if (resp.status === 200) {
                        const data = await resp.json();
                        setStore({
                            auth: true,
                        });

                        if (data.tipo === "Usuario") {
                            setStore({
                                usuario: true,
                            });
                        }
                        localStorage.setItem("token", data.access_token);
                        localStorage.setItem("mail", email);
                        localStorage.setItem("tipo", data.tipo);
                    } else if (resp.status === 404) {
                        alert("usuario no existe");
                    } else {
                        alert("email o contraseña incorrecta");
                    }

                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },

            //CREAR SOLICITUD
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
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },

            // CREAR USUARIO
            createUser: async (name, lastname, email, password) => {
                try {
                    // fetching data from the backend
                    const resp = await fetch(
                        process.env.BACKEND_URL + "/api/user_signup", {
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
                    if (resp.status == 200) {
                        setStore({
                            register: true,
                        });
                    }
                    console.log(data);
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },

            //CREAR USUARIO TRABAJADOR
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
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },
            //MUESTRA LISTADO DE TRABAJOS OFERTADOS. LA MISMA RUTA PARA TRABAJADOR Y USUARIO
            showWork: async () => {
                try {
                    const token = localStorage.getItem("token");
                    const resp = await fetch(process.env.BACKEND_URL + "/api/listwork", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + token,
                        },
                    });

                    const data = await resp.json();
                    setStore({
                        work: data,
                    });
                    // // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },

            // LOGOUT
            logout: () => {
                localStorage.removeItem("token");
                localStorage.removeItem("mail");
                localStorage.removeItem("tipo");
                setStore({
                    auth: false,
                });
            },
            // UPDATE OUT

            updateOut: () => {
                if (localStorage.getItem("token")) {
                    setStore({
                        auth: true,
                    });
                }
                if (localStorage.getItem("tipo")) {
                    setStore({
                        usuario: true,
                    });
                }
            },
        },
    };
};

export default getState;