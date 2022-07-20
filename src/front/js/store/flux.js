const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            auth: false,
            register: false,
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

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
                            auth: true
                        })
                        localStorage.setItem("token", data.access_token);
                        localStorage.setItem("mail", email);

                    } else if (resp.status === 404) {
                        alert("usuario no existe")
                    } else {
                        alert("email o contraseña incorrecta")
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
                    // setStore({
                    //     message: data.message,
                    // });
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },


            // LOGOUT
            logout: () => {
                localStorage.removeItem("token")
                setStore({
                    auth: false
                })
            },

            //CODIGO DE CLOUDINARY SUBIDA DE FOTO

            uploadFile: async (uploadImages) => {
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
                        // actions.putImage(data.secure_url);
                        console.log(data);
                    }
                } catch (error) {
                    console.log("message", error);
                }
            },

            // // DESCARGA DE ARCHIVO CLAUDINARY
            // // downloadFile: async (downloadImages) => {
            // //     const cloud_name = "carolinaqotf"; //"pluggedin";
            // //     const preset = "s5oaavqo"; //"icnpftra";
            // //     const url_claudinari = `https://api.cloudinary.com/v1_1/${cloud_name}/image/download`;

            // //     const formData = new FormData();
            // //     formData.append("file", downloadImages);
            // //     formData.append("upload_preset", `${preset}`);
            // //     try {
            // //         const response = await fetch(
            // //             //process.env.BACKEND_URL + "/api/hello",
            // //             url_claudinari, {
            // //                 method: "POST",
            // //                 body: formData,
            // //             }
            // //         );
            // //         if (response.ok) {
            // //             const data = await response.json();
            // //             // actions.putImage(data.secure_url);
            // //             console.log(data);
            // //         }
            // //     } catch (error) {
            // //         console.log("message", error);
            // //     }
            // // },

            // download: () => {
            //     // const cloud_name = "carolinaqotf"; //"pluggedin";
            //     // const preset = "s5oaavqo"; //"icnpftra";
            //     // const url_claudinari = `https://api.cloudinary.com/v1_1/${cloud_name}/image`;
            //     //https://res.cloudinary.com/demo/image/upload/fl_attachment:myPdf/multi_page_pdf.pdf

            //     fetch("https://api.cloudinary.com/v1_1/carolinaqotf/image/upload")
            //         .then(resp => resp.json())
            //         .then(data => {
            //             console.log(data);
            //             // setStore({
            //             //     planetas: data.results
            //             // });
            //         })
            // },

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