import { useState } from "react";
import { useGetUsersQuery } from "../../../api/userApi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser, addMessageToUser } from "../services/usersSlice";

const useUsers = () => {
  const users = useSelector((state) => state.users.list);
  const { data, isLoading } = useGetUsersQuery(30);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [showModalMessage, setShowModalMessage] = useState(false);
  const [userToMessage, setUserToMessage] = useState(null);

  const [showFilters, setShowFilters] = useState(false);

  const [exportStatus, setExportStatus] = useState("idle");

  const INITIAL_FILTERS = {
    search: "",
    gender: "all",
    nationality: "all",
    ageRange: [18, 80],
  };

  const [filters, setFilters] = useState(INITIAL_FILTERS);

  const hasActiveFilters =
    filters.search !== "" ||
    filters.gender !== "all" ||
    filters.nationality !== "all" ||
    filters.ageRange[1] !== 80;

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
    const email = user.email.toLowerCase();
    const searchMatch =
      filters.search === "" ||
      fullName.includes(filters.search.toLowerCase()) ||
      email.includes(filters.search.toLowerCase());

    const genderMatch =
      filters.gender === "all" || user.gender === filters.gender;

    const nationalityMatch =
      filters.nationality === "all" || user.nat === filters.nationality;

    const ageMatch =
      user.dob.age >= filters.ageRange[0] &&
      user.dob.age <= filters.ageRange[1];

    return searchMatch && genderMatch && nationalityMatch && ageMatch;
  });

  const resetFilters = () => {
    setFilters(INITIAL_FILTERS);
  };

  const openMessageModal = (user) => {
    setUserToMessage(user);
    setShowModalMessage(true);
  };

  const closeModalMessage = () => {
    setShowModalMessage(false);
    setUserToMessage(null);
  };

  const confirmSend = (text) => {
    dispatch(
      addMessageToUser({
        userId: userToMessage.login.uuid,
        message: {
          id: crypto.randomUUID(),
          text,
          date: new Date().toISOString(),
          from: "admin",
        },
      })
    );

    closeModalMessage();
  };

  const openDeleteModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setShowModal(false);
  };

  const confirmDelete = () => {
    dispatch(removeUser(selectedUser.login.uuid));
    closeModal();
  };

  const handleDelete = (uuid) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar este usuario?"
    );

    if (!confirmDelete) return;

    dispatch(removeUser(uuid));
  };

  const nationalities = [...new Set(users.map((user) => user.nat))];

  const exportToCSV = async () => {
    if (!filteredUsers.length) return;

    try {
      setExportStatus("exporting");

      // Simulación de proceso pesado
      await new Promise((resolve) => setTimeout(resolve, 1200));

      const headers = [
        "Nombre",
        "Email",
        "Género",
        "Edad",
        "Nacionalidad",
        "País",
      ];

      const rows = filteredUsers.map((user) => [
        `${user.name.first} ${user.name.last}`,
        user.email,
        user.gender,
        user.dob.age,
        user.nat,
        user.location.country,
      ]);

      const csvContent = [
        headers.join(","),
        ...rows.map((row) => row.map((cell) => `"${cell}"`).join(",")),
      ].join("\n");

      const blob = new Blob([csvContent], {
        type: "text/csv;charset=utf-8;",
      });

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.setAttribute("download", "usuarios.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setExportStatus("done");
      setTimeout(() => {
        setExportStatus("idle");
      }, 2000);
    } catch (error) {
      console.error("Error exportando CSV:", error);
      setExportStatus("error");
    }
  };

  return {
    states: {
      users: filteredUsers,
      totalUsers: users.length,
      filteredCount: filteredUsers.length,
      data,
      isLoading,
      dispatch,
      navigate,
      showModal,
      selectedUser,
      showModalMessage,
      userToMessage,
      showFilters,
      filters,
      nationalities,
      hasActiveFilters,
      exportStatus,
    },
    setters: {
      setShowModal,
      setSelectedUser,
      setShowFilters,
      setFilters,
    },
    handles: {
      handleDelete,
      openDeleteModal,
      closeModal,
      confirmDelete,
      openMessageModal,
      closeModalMessage,
      confirmSend,
      resetFilters,
      exportToCSV,
    },
  };
};

export default useUsers;
