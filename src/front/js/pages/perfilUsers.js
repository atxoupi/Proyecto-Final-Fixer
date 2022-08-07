import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PerfilUser from "../component/perfilUser";

export const PerfilUsers = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.consultUserProfile();
  }, []);

  return (
    <div>
      <PerfilUser />
    </div>
  );
};
