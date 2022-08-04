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
            workers: [],
            budget: [],
            regions: [
                "Albacete",
                "Alicante/Alacant",
                "Almería",
                " Álava/Araba",
                "Asturias",
                "Ávila",
                "Badajoz",
                "Balears, Illes",
                "Barcelona",
                "Bizkaia",
                "Burgos",
                "Cáceres",
                "Cádiz",
                "Cantabria",
                "Castellón/Castelló",
                "Ciudad Real",
                "Córdoba",
                "Coruña, A",
                "Cuenca",
                "Gipuzkoa",
                "Girona",
                "Granada",
                "Guadalajara",
                "Huelva",
                "Huesca",
                "Jaén",
                "León",
                "Lleida",
                "Lugo",
                "Madrid",
                "Málaga",
                "Murcia",
                "Navarra",
                "Ourense",
                "Palencia",
                "Palmas, Las",
                "Pontevedra",
                "Rioja, La",
                "Salamanca",
                "Santa Cruz de Tenerife",
                "Segovia",
                "Sevilla",
                "Soria",
                "Tarragona",
                "Teruel",
                "Toledo",
                "Valencia/València",
                "Valladolid",
                "Zamora",
                "Zaragoza",
                "Ceuta",
                "Melilla",
            ],
            workerprofile: {},
            editWorker: [],
            editWorkerGet: {},
            editUser: [],
            consultUser: {},
            ratings: [],
            pictures: {},
            viewRatings: false,
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
                    // si el status es correcto nos setea a auth true y esto nos servirá para renderizar condicionalmente si se está logueado
                    const data = await resp.json();
                    if (resp.status === 200) {
                        setStore({
                            auth: true,
                        });
                        // según el tipo de usuario nos cambia el store.usuario, para renderizado condicional usuario-empresa
                        if (data.tipo === "Usuario") {
                            setStore({
                                usuario: true,
                            });
                        } else {
                            setStore({
                                usuario: false,
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

            //Crea una solicitud de trabajo y envía al backend información de ciudad, sector, título y descripción.
            // También email que coge del localStorage
            createRequest: async (city, sector, description, title) => {
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
                                title: title,
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
                        getActions().login(email, password);
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
                    getActions().login(email, password);
                    console.log(data);
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },

            //Trae del backend el listado de trabajos ofertados y los añade al store.work
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

            // Función que nos devuelve un listado con todos los trabajadores de la base de datos y los añade al store.workers
            listWorkers: async () => {
                try {
                    const token = localStorage.getItem("token");
                    const resp = await fetch(process.env.BACKEND_URL + "/api/workers", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + token,
                        },
                    });

                    const data = await resp.json();
                    setStore({
                        workers: data,
                    });

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
                    usuario: null,
                });
            },
            // UPDATE OUT. Función que nos mantiene el store aunque refresquemos la página
            updateOut: () => {
                if (localStorage.getItem("token")) {
                    setStore({
                        auth: true,
                    });
                }
                if (localStorage.getItem("tipo") === "Usuario") {
                    setStore({
                        usuario: true,
                    });
                }
            },

            //CODIGO DE CLOUDINARY SUBIDA DE FOTO

            uploadFile: async (uploadImages, id, price, duracion) => {
                const cloud_name = "carolinaqotf"; //"pluggedin";
                const preset = "s5oaavqo"; //"icnpftra";
                const url_claudinari = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

                const formData = new FormData();
                formData.append("file", uploadImages);
                formData.append("upload_preset", `${preset}`);
                try {
                    const response = await fetch(
                        //process.env.BACKEND_URL + "/api/hello",
                        url_claudinari, {
                            method: "POST",
                            body: formData,
                        }
                    );
                    if (response.ok) {
                        const data = await response.json();
                        const token = localStorage.getItem("token");
                        const response2 = await fetch(
                            process.env.BACKEND_URL + "/api/save_budget", {
                                method: "POST",
                                body: JSON.stringify({
                                    url: data.url,
                                    price: price,
                                    duration: duracion,
                                    id_work: id,
                                }),
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: "Bearer " + token,
                                },
                            }
                        );
                        getActions().showWork();
                        console.log(data);
                    }
                } catch (error) {
                    console.log("message", error);
                }
            },
            // Función que devuelve los presupuestos que hay en la base de datos y los añade al store.budgets
            showbudget: async (id) => {
                try {
                    const token = localStorage.getItem("token");
                    const resp = await fetch(
                        process.env.BACKEND_URL + `/api/listbudget/${id}`, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + token,
                            },
                        }
                    );

                    const data = await resp.json();
                    setStore({
                        budget: data,
                    });
                    // // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },
            getworker: async (id) => {
                try {
                    const resp = await fetch(
                        process.env.BACKEND_URL + "/api/worker_profile/" + id, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    );
                    const data = await resp.json();
                    setStore({
                        workerprofile: data,
                    });
                    console.log(data);
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },

            //DeleteWork recibe el id de la tarea y la elimina de la base de datos, una vez realizado vuelve a cargar todas las tareas y las visualiza
            deleteWork: async (work_id) => {
                try {
                    const resp = await fetch(
                        process.env.BACKEND_URL + "/api/work/delete/" + work_id, {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    );
                    const data = await resp.json();
                    getActions().showWork();
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },
            //EDITAR DATOS DE USUARIO EMPRESA
            editWorkerProfile: async (
                name,
                email,
                city,
                sector,
                direccion,
                tlf,
                postcode
            ) => {
                console.log(
                    "flux " + name,
                    email,
                    city,
                    sector,
                    direccion,
                    tlf,
                    postcode
                );
                try {
                    const token = localStorage.getItem("token");
                    const resp = await fetch(
                        process.env.BACKEND_URL + "/api/update_worker", {
                            method: "PUT",
                            body: JSON.stringify({
                                name: name,
                                email: email,
                                city: city,
                                sector: sector,
                                adress: direccion,
                                tlf_number: tlf,
                                postcode: postcode,
                            }),
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + token,
                            },
                        }
                    );

                    const data = await resp.json();
                    setStore({
                        editWorker: data,
                    });
                    getActions().consultWorkerProfile();

                    return data;
                    console.log(data);
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },

            //CONSULTAR DATOS DE USUARIO EMPRESA
            consultWorkerProfile: async () => {
                try {
                    const token = localStorage.getItem("token");
                    const resp = await fetch(process.env.BACKEND_URL + "/api/profile", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + token,
                        },
                    });

                    const data = await resp.json();
                    setStore({
                        editWorkerGet: data,
                    });
                    console.log(data);
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },

            //EDITAR DATOS DE USUARIO
            editUserProfile: async (
                name,
                lastname,
                email,
                city,
                tlf,
                adress,
                postcode
            ) => {
                console.log(
                    "flux " + name,
                    lastname,
                    email,
                    city,
                    tlf,
                    adress,
                    postcode
                );
                try {
                    const token = localStorage.getItem("token");
                    const resp = await fetch(
                        process.env.BACKEND_URL + "/api/update_user", {
                            method: "PUT",
                            body: JSON.stringify({
                                name: name,
                                lastname: lastname,
                                email: email,
                                city: city,
                                tlf_number: tlf,
                                adress: adress,
                                postcode: postcode,
                            }),
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + token,
                            },
                        }
                    );
                    getActions().consultUserProfile();

                    const data = await resp.json();
                    setStore({
                        editUser: data,
                    });
                    console.log(data);
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },

            //CONSULTAR DATOS DE USUARIO
            consultUserProfile: async () => {
                try {
                    const token = localStorage.getItem("token");
                    const resp = await fetch(process.env.BACKEND_URL + "/api/profile", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + token,
                        },
                    });

                    const data = await resp.json();
                    setStore({
                        consultUser: data,
                    });

                    return data;
                    // console.log(data);
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },
            aceptBudget: async (id) => {
                try {
                    const token = localStorage.getItem("token");
                    const resp = await fetch(
                        process.env.BACKEND_URL + "/api/aceptbudget/" + id, {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + token,
                            },
                        }
                    );

                    const data = await resp.json();
                    if (resp.status === 200) {
                        setStore({
                            viewRatings: true,
                        });
                        alert(data.message);
                    }
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },
            rejectBudget: async (id) => {
                try {
                    const token = localStorage.getItem("token");
                    const resp = await fetch(
                        process.env.BACKEND_URL + "/api/rejectbudget/" + id, {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + token,
                            },
                        }
                    );

                    const data = await resp.json();
                    if (resp.status === 200) {
                        alert(data.message);
                    }
                    getActions().showbudget(id);
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },
            // Función que añade una valoración en forma numérica y un comentario a un trabajador.
            // Es necesario estar logueado y haberle aceptado un presupuesto para poder realizar la valoración
            addingRating: async (ratingNum, comment, worker_id, work_id) => {
                console.log(ratingNum, worker_id, comment, work_id);
                try {
                    const token = localStorage.getItem("token");
                    const resp = await fetch(
                        process.env.BACKEND_URL + "/api/add_rating", {
                            method: "POST",
                            body: JSON.stringify({
                                ratingNum: parseInt(ratingNum),
                                worker_id: worker_id,
                                comment: comment,
                                work_id: work_id,
                            }),
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + token,
                            },
                        }
                    );
                    const data = await resp.json();
                    if (resp.status === 200) {
                        console.log("Valoración guardada");
                    }
                    return data;
                    // console.log(data);
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },

            //Fetch a Claudinary para subir y descargar la foto de perfil al editarla

            pictureProfile: async (uploadImages) => {
                const cloud_name = "carolinaqotf"; //"pluggedin";
                const preset = "s5oaavqo"; //"icnpftra";
                const url_claudinari = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

                const formData = new FormData();
                formData.append("file", uploadImages);
                formData.append("upload_preset", `${preset}`);

                try {
                    const response = await fetch(
                        //process.env.BACKEND_URL + "/api/hello",
                        url_claudinari, {
                            method: "POST",
                            body: formData,
                        }
                    );
                    if (response.ok) {
                        const store = getStore();
                        const data = await response.json();
                        const token = localStorage.getItem("token");
                        const response2 = await fetch(
                            process.env.BACKEND_URL + "/api/profile_user", {
                                method: "PUT",
                                body: JSON.stringify({
                                    pictures: data.url,
                                    userType: store.usuario ? "user" : "work",
                                }),
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: "Bearer " + token,
                                },
                            }
                        );

                        console.log(data);
                    }
                } catch (error) {
                    console.log("message", error);
                }
            },

            //Funcion que muestra la foto de perfil
            showPicturesProfile: async () => {
                try {
                    const token = localStorage.getItem("token");
                    const resp = await fetch(process.env.BACKEND_URL + `/api/profile`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + token,
                        },
                    });
                    const data = await resp.json();
                    setStore({
                        consultUser: data.pictures,
                    });
                    // // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },

            // Función que devuelve las valoraciones de un trabajador, se pasa el id del trabajador como parámetro
            getRating: async (id) => {
                console.log(id);
                try {
                    const resp = await fetch(
                        process.env.BACKEND_URL + `/api/worker/${id}/ratings`, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    );
                    const data = await resp.json();
                    setStore({
                        ratings: data,
                    });

                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },
        },
    };
};

export default getState;