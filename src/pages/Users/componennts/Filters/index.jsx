import React from "react";
import "./index.css";
import useUsers from "../../hooks/useUsers";

const Filters = () => {
  const {
    states: { users },
  } = useUsers();

  return (
    <section className="users-header">
      <div className="header-top">
        <div className="title-row">
          <div className="title">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#0284c7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 20c0-1.742-1.67-3.223-4-3.773M15 20c0-2.21-2.686-4-6-4s-6 1.79-6 4m12-7a4 4 0 0 0 0-8m-6 8a4 4 0 1 1 0-8a4 4 0 0 1 0 8"
                />
              </svg>
            </span>
            <h1>Usuarios</h1>
          </div>
          <p className="subtitle">{users?.length} usuarios encontrados</p>
        </div>

        <button className="export-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5l5-5m-5-7v12"
            />
          </svg>{" "}
          Exportar CSV
        </button>
      </div>

      <div className="search-box">
        <span className="search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#666666"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"
            />
          </svg>
        </span>
        <input type="text" placeholder="Buscar por nombre o email..." />
      </div>

      <button className="filter-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M22 3H2l8 9.46V19l4 2v-8.54z"
          />
        </svg>{" "}
        Filtros avanzados
      </button>
    </section>
  );
};

export default Filters;
