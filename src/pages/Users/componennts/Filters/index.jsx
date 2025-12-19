import React from "react";
import "./index.css";
import { useContext } from "react";
import { UsersContext } from "../../context/UsersProvider";

const Filters = () => {
  const {
    useUsers: {
      states: {
        users,
        filteredCount,
        showFilters,
        filters,
        nationalities,
        hasActiveFilters,
        exportStatus,
      },
      setters: { setShowFilters, setFilters },
      handles: { resetFilters, exportToCSV },
    },
  } = useContext(UsersContext);

  return (
    <section className="users-header">
      {exportStatus === "exporting" && (
        <div className="export-toast exporting">Exportando usuarios...</div>
      )}

      {exportStatus === "done" && (
        <div className="export-toast success">Exportación completada</div>
      )}
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

        <button
          className="export-button"
          onClick={exportToCSV}
          disabled={exportStatus === "exporting" || filteredCount === 0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#000"
              strokeWidth="2"
              d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5l5-5m-5-7v12"
            />
          </svg>
          {exportStatus === "exporting" && "Exportando..."}
          {exportStatus === "done" && "Exportación lista ✓"}
          {exportStatus === "idle" && "Exportar CSV"}
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
        <input
          type="text"
          placeholder="Buscar por nombre o email..."
          value={filters.search}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              search: e.target.value,
            }))
          }
        />
      </div>

      <div className="filters">
        <button
          className="filter-button"
          onClick={() => setShowFilters(!showFilters)}
        >
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
        {hasActiveFilters && (
          <button className="clear-filters" onClick={resetFilters}>
            ✕ Limpiar
          </button>
        )}
      </div>

      {showFilters && (
        <div className="advanced-filters">
          <div className="filter-item">
            <label>Género</label>
            <select
              value={filters.gender}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  gender: e.target.value,
                }))
              }
            >
              <option value="all">Todos</option>
              <option value="female">Mujer</option>
              <option value="male">Hombre</option>
            </select>
          </div>

          <div className="filter-item">
            <label>Nacionalidad</label>
            <select
              value={filters.nationality}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  nationality: e.target.value,
                }))
              }
            >
              <option value="all">Todas</option>

              {nationalities.map((nat) => (
                <option key={nat} value={nat}>
                  {nat}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-item range">
            <label>Rango de edad</label>
            <input
              type="range"
              min="18"
              max="80"
              value={filters.ageRange[1]}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  ageRange: [18, Number(e.target.value)],
                }))
              }
            />

            <span className="range-value">
              {filters.ageRange[0]} - {filters.ageRange[1]} años
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Filters;
