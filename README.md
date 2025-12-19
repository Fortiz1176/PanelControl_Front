- Random User Panel:
    Panel de administración de usuarios construido con React, enfocado en la visualización, filtrado y exportación de información proveniente de la API (https://randomuser.me/)
    Con este proyecto simulamos un entorno real de trabajo frontend, aplicando buenas practicas de manejo del estado global, arquitectura y escalabilidad.

-Descripción general:
    En este proyecto encontramos un panel de control de usuarios que consume datos desde la API (https://randomuser.me/)
    Permite a un usuario:
        -Iniciar sesión (autenticación simulada)
        -Visualizar una lista de usuarios
        -Aplicar multifiltros
        -Ver detalles de cada usuarios
        -Enviar mensajes simulados a los usuarios
        -Exportar datos de los usuarios respetando los filtros

-Tecnologías:
    -React
    -Vite
    -React Router DOM
    -Redux Toolkit
    -RTK Query
    -Context API
    -CSS
    -Random user api

Arquitectura del proyecto:
    En este proyecto observamos una arquitectura modular y escalable, separando responsabilidades
        -Redux: Estado global de dominio (usuarios, mensajes)
        -Context API: Estado compartido de UI y lógica derivada (filtros exportación)
        -Custom Hooks: Encapsulación de lógica compleja
        -Componentes desacoplados: Reutilizables y faciles de mantener
    Se evita la duplicación de estado y se prioriza el uso de estado derivado

Sistema de autenticación:
    -Pantalla de login
    -Protección de rutas privadas
    -Persistencia de sesión con localstorage
    -Redireccióon automática según estado de autenticación


Funcionalidades principales:
    Gestion de usuarios:
        -Listado de usuarios desde la API
        -Visualización de información importante
        -Vista de detalle de usuario
    MultiFiltros:
        -Busqueda por nombre o correo
        -Filtro por genero
        -Filtro por nacionalidad
        -Rango de edad
        -Limpieza total de filtros
    Todos los filtros se aplican sin cargar datos ni hacer nuevas peticiones.

Exportación de datos:
    -Exportación de usuarrios en CSV
    -Respeta los filtros activos o no activos
    El archivo generado es compatible con
        -Excel
        -Sheets

INSTALACIÓN Y EJECUCIÓN LOCAL
    -Clonar el repositorio: git clone https://github.com/Fortiz1176/PanelControl_Front.git
    -Instalar dependencias: npm i
    Ejecutar en modo desarrollo: npm run dev
    Ejecución en puerto 3000

Decisiones técnicas:
    -RTK Query para el consumo de API y cacheo eficiente
    -Context API para evitar prop drilling y compartir estado
    -Estado derivado para filtros (sin mutar el estado base)
    -Separación de lógia y UI
    